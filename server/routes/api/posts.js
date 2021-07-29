const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');

const router = express.Router();

const mongoURI = 'mongodb+srv://Hitesh:hskT123%40k@cluster.fldzn.mongodb.net/image-uploader?retryWrites=true&w=majority';

const conn = mongoose.createConnection(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

let gfs

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('images');
});

let storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                };
                resolve(fileInfo);
            });
        });
    },
    options: {
        useUnifiedTopology: true,
    }
});
const upload = multer({ storage });

router.get('/image/:imageName', (req, res) => {
    gfs.files.findOne({ filename: req.params.imageName }, (err, file) => {
        if (!file || file.length == 0) {
            return res.status(404).json({
                err: "No file exists"
            })
        }

        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            var readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            })
        }
    })
})

router.get('/', (req, res) => {
    gfs.files.find().toArray(async (err, files) => {
        files.map(file => {
            if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/jpg') {
                file.isImage = true;
            } else {
                file.isImage = false;
            }
        })

        res.send(await JSON.stringify({ files }))
    })
})

router.post('/', upload.single('file'), (req, res) => {
    // res.json({file:req.file});
    res.status(200).send();
});

router.delete('/:id', async (req, res) => {
    await gfs.remove({ _id: req.params.id, root: 'images' }, function (err, gridStore) {
        if (err) return res.status(404).json({ error: err });
        res.status(200).send();
    });
});

module.exports = router