const { createServer } = require("http");
const { createReadStream } = require("fs");
const port = 3000;


const sendFile = (res, statut, type, file) =>{
  res.writeHead(statut, {"content-type" : type});
  createReadStream(file).pipe(res);
}

createServer((req, res) => {
  switch(req.url){
    case "/":
      return sendFile(
        res,
        200,
        "text/html",
        "./index.html"
      );

    case "/style.css":
      return sendFile(
        res,
        200,
        "text/css",
        "./style.css"
      );

    case "/fonctions.js":
      return sendFile(
        res,
        200,
        "text/script",
        "./fonctions.js"
      );

    case "/images/image1.jpg":
      return sendFile (
       res, 
       200,
       "image/jpg", 
       "./image1.jpg"
      );

    case "/images/about_img.jpg":
      return sendFile(
        res,
        200,
        "image/jpg",
        "./about_img.jpg"
      );

    case "/images/Music-Player.PNG":
      return sendFile(
        res,
        200,
        "image/PNG",
        "./Music-Player.PNG"
      );

    case "/images/todo2.jpg":
      return sendFile(
        res,
        200,
        "image/jpg",
        "./todo2.jpg"
      );

    case "/images/background.jpg":
      return sendFile(
        res,
        200,
        "image/jpg",
        "./background.jpg"
      );

    case "/images/shortcut.png":
      return sendFile(
        res,
        200,
        "image/png",
        "./shortcut.png"
      );

    case "/images/project-4.jpg":
      return sendFile(
        res,
        200,
        "image/jpg",
        "./project-4.jpg"
      );

    case "/images/newsletter.jpg":
      return sendFile(
        res,
        200,
        "image/jpg",
        "./newsletter.jpg"
      );

    case "/images/project-5.png":
      return sendFile(
        res,
        200,
        "image/png",
        "./project-5.png"
      );

    default:
      return sendFile(
        res,
        404,
        "text/html",
        "./404.html"
      );
  }
}).listen(port);

console.log("les services lancé fonctionnent sur le port " + 3000 + " en local");


