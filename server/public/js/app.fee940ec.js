(function(e){function t(t){for(var r,i,o=t[0],s=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09fa":function(e,t,n){},"15cb":function(e,t,n){"use strict";n("09fa")},"19e7":function(e,t,n){e.exports=n.p+"img/image.3956556f.svg"},"2e7c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,i){var o=Object(r["n"])("home");return Object(r["i"])(),Object(r["d"])(o)}var c=Object(r["q"])("data-v-bef449d2");Object(r["k"])("data-v-bef449d2");var i={class:"home"},o={key:1,class:"container"},s=Object(r["g"])("img",{src:"https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif",alt:""},null,-1),u={class:"container d-none pick-input"},l={class:"container my-4"};Object(r["j"])();var d=c((function(e,t,n,a,d,f){var m=Object(r["n"])("preloader"),g=Object(r["n"])("dragndrop"),p=Object(r["n"])("credits");return Object(r["i"])(),Object(r["d"])("div",i,[Object(r["g"])(r["b"],{name:"fade"},{default:c((function(){return[Object(r["g"])(m)]})),_:1}),d.uploading?(Object(r["i"])(),Object(r["d"])("div",o,[s])):(Object(r["i"])(),Object(r["d"])(g,{key:0})),Object(r["g"])("div",u,[Object(r["g"])("input",{type:"file",name:"file",id:"file",onChange:t[1]||(t[1]=function(){return e.imageChosen&&e.imageChosen.apply(e,arguments)}),ref:"fileInput",style:{display:"none"}},null,544),Object(r["g"])("div",{class:"btn btn-primary",onClick:t[2]||(t[2]=function(t){return e.$refs.fileInput.click()})}," Pick File ")]),Object(r["g"])("div",l,[Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return f.createPost&&f.createPost.apply(f,arguments)}),class:"btn btn-primary shadow-sm fw-normal",style:{width:"100%"}}," Submit ")]),(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(d.files.files,(function(e){return Object(r["i"])(),Object(r["d"])("div",{class:"\n                container\n                d-flex\n                flex-column\n                p-4\n                border\n                rounded-3\n                shadow-sm\n                my-4\n                image-storage\n            ",key:e},[Object(r["g"])("img",{src:"/api/posts/image/"+e.filename,alt:"",class:"image-fluid rounded-3"},null,8,["src"]),Object(r["g"])("div",{class:"btn btn-danger fw-normal mt-4",onClick:function(t){return f.deleteImage(e._id)}}," DELETE ",8,["onClick"])])})),128)),Object(r["g"])(p)])})),f=n("1da1"),m=(n("caad"),n("96cf"),n("d4ec")),g=n("bee2"),p=(n("d3b7"),"/api/posts/"),b=function(){function e(){Object(m["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p,{method:"GET"}).then((function(e){return e.json()}));case 3:r=e.sent,t(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return fetch(p,{method:"POST",body:e})}},{key:"deletePost",value:function(e){return fetch("".concat(p).concat(e),{method:"DELETE"})}}]),e}(),h=b,v=Object(r["q"])("data-v-101952fc");Object(r["k"])("data-v-101952fc");var j=Object(r["f"])(" Created by "),O=Object(r["g"])("a",{href:"https://github.com/hitesh-coder"},"HITESH",-1),y=Object(r["f"])(" - E-Cell Recruitment challenge ");Object(r["j"])();var w=v((function(e,t,n,a,c,i){return Object(r["i"])(),Object(r["d"])("div",null,[j,O,y])})),k={name:"credits"};n("7f83");k.render=w,k.__scopeId="data-v-101952fc";var x=k,S=n("19e7"),I=n.n(S),P=Object(r["q"])("data-v-37dfd9b9");Object(r["k"])("data-v-37dfd9b9");var F={class:"\n            d-none d-md-flex\n            flex-column\n            dragndrop\n            container\n            p-4\n            shadow\n            rounded-3\n            justify-content-center\n            align-items-center\n        ",style:{width:"50%"}},D=Object(r["g"])("div",{class:"text-center fs-4 fw-bold my-2"},"Upload your image",-1),R=Object(r["g"])("div",{class:"text-center fw-normal fs-6 my-2"}," File should be Jpeg, Png,... ",-1),T={key:0},C=Object(r["g"])("img",{src:I.a,alt:"",class:"image-fluid mb-4"},null,-1),_=Object(r["g"])("div",{class:"text-center"},"Drag & Drop your image here",-1),E=Object(r["g"])("div",{class:"text-center fs-4 fw-normal"},"or",-1);Object(r["j"])();var $=P((function(e,t,n,a,c,i){return Object(r["i"])(),Object(r["d"])("div",F,[D,R,i.imgSrc?(Object(r["i"])(),Object(r["d"])("div",T,[Object(r["g"])("img",{src:i.imgSrc,alt:"",style:{width:"90%"},class:"rounded-3 my-4"},null,8,["src"])])):(Object(r["i"])(),Object(r["d"])("div",{key:1,class:"\n                drag-area\n                border-primary border-2\n                rounded-3\n                p-5\n                bg-light bg-gradient\n                my-4\n            ",style:[{border:c.borderState},{width:"90%"}],onDragover:t[3]||(t[3]=Object(r["p"])((function(){return i.changeBorderToSolid&&i.changeBorderToSolid.apply(i,arguments)}),["prevent"])),onDragleave:t[4]||(t[4]=function(){return i.changeBorderToDashed&&i.changeBorderToDashed.apply(i,arguments)}),onDrop:t[5]||(t[5]=Object(r["p"])((function(){return e.imageDrop&&e.imageDrop.apply(e,arguments)}),["prevent"]))},[C,_,E,Object(r["g"])("input",{type:"file",name:"file",id:"file",onChange:t[1]||(t[1]=function(){return i.imageChosen&&i.imageChosen.apply(i,arguments)}),ref:"fileInput",style:{display:"none"}},null,544),Object(r["g"])("div",{class:"btn btn-primary mt-4 shadow-sm",onClick:t[2]||(t[2]=function(t){return e.$refs.fileInput.click()})},"Pick File")],36))])})),B={name:"dragndrop",data:function(){return{borderState:"dashed",getImage:null}},computed:{imgSrc:function(){return this.$store.getters.imageSrc}},methods:{changeBorderToSolid:function(e){e.preventDefault(),this.borderState="solid"},changeBorderToDashed:function(){this.borderState="dashed"},imageChosen:function(e){this.setImage(e.target.files[0])},dropImage:function(e){this.setImage(e.dataTransfer.files[0])},setImage:function(e){var t=this,n=["image/jpg","image/jpeg","image/png"];if(n.includes(e.type)){var r=new FileReader;r.onload=function(){var e=r.result;t.$store.dispatch("setImgSrc",e)},r.readAsDataURL(e),this.$store.dispatch("setImgFile",e)}else alert("Please enter an image file")}}};B.render=$,B.__scopeId="data-v-37dfd9b9";var M=B,L=Object(r["q"])("data-v-0b9e877e");Object(r["k"])("data-v-0b9e877e");var q={key:0,class:"preloader"},A=Object(r["g"])("img",{src:"https://media2.giphy.com/media/rrTXn4zEMp008/giphy.gif?cid=790b76112a8f84c718115d7a0e1e4969a3856a0df252622b&rid=giphy.gif&ct=g",alt:""},null,-1);Object(r["j"])();var J=L((function(e,t,n,a,c,i){return c.isloaded?Object(r["e"])("",!0):(Object(r["i"])(),Object(r["d"])("div",q,[A]))})),G={name:"preloader",data:function(){return{isloaded:!1}},mounted:function(){var e=this;document.onreadystatechange=function(){"complete"==document.readyState&&(e.isloaded=!0)}}};n("6d8b");G.render=J,G.__scopeId="data-v-0b9e877e";var H=G,U={components:{preloader:H,Dragndrop:M,Credits:x},name:"home",component:{preloader:H,Dragndrop:M},data:function(){return{files:[],error:null,uploading:!1}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getPosts();case 3:e.files=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},computed:{imageFile:function(){return this.$store.getters.imageFile}},methods:{setImage:function(e){var t=this,n=e.dataTransfer.files[0],r=["image/jpg","image/jpeg","image/png"];if(r.includes(n.type)){var a=new FileReader;a.onload=function(){var e=a.result;t.$store.dispatch("setImgSrc",e)},a.readAsDataURL(n),this.$store.dispatch("setImgFile",n)}else alert("Please enter an image file")},createPost:function(){var e=this,t=new FormData;t.append("file",this.imageFile),h.insertPost(t).then(this.uploading=!0).then(Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getPosts();case 3:e.files=t.sent,e.uploading=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),this.$store.dispatch("removeFileData")},deleteImage:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h.deletePost(e).then(Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.getPosts();case 3:t.files=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))));case 2:case"end":return n.stop()}}),n)})))()}}};n("15cb");U.render=d,U.__scopeId="data-v-bef449d2";var X=U,z={name:"App",components:{Home:X}};n("a434");z.render=a;var W=z,Y=n("5502"),K=Object(Y["a"])({state:{imageSrc:null,imageFile:null},mutations:{setImgSrc:function(e,t){e.imageSrc=t},setImgFile:function(e,t){e.imageFile=t},removeFileData:function(e){e.imageFile=null,e.imageSrc=null}},actions:{setImgSrc:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("setImgSrc",t);case 1:case"end":return n.stop()}}),n)})))()},setImgFile:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("setImgFile",t);case 1:case"end":return n.stop()}}),n)})))()},removeFileData:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("removeFileData");case 1:case"end":return t.stop()}}),t)})))()}},modules:{},getters:{imageSrc:function(e){return e.imageSrc},imageFile:function(e){return e.imageFile}}});Object(r["c"])(W).use(K).mount("#app")},"6d8b":function(e,t,n){"use strict";n("ecaf")},"7f83":function(e,t,n){"use strict";n("2e7c")},a434:function(e,t,n){"use strict";n("fa73")},ecaf:function(e,t,n){},fa73:function(e,t,n){}});
//# sourceMappingURL=app.fee940ec.js.map