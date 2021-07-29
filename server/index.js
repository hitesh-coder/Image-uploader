const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const imgposts = require("./routes/api/posts");

app.use("/api/posts", imgposts);

// Handle Production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => {
    console.log(`App listining on ${port}`)
})