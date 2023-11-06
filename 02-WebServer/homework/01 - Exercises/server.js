var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
http.createServer(function(req,res){
  console.log(`Server raised in port ${PORT}`)
  if(req.url === "/api"){
    fs.readFile("./utils/dogsData.json", (err, data)=>{
      if(err) res.writeHead(404, {"Content-type": "text/plain"}).end("json not found")
      res.writeHead(200, {"Content-type": "application/json"}).end(data)
    })
    return;    
  }
  if(req.url ==="/allDogs"){
    fs.readFile("./utils/allDogs.html", "UTF8", (err,data)=>{
      if(err) res.writeHead(404, {"Content-type": "text/plain"}).end("html not found")
      res.writeHead(200, {"Content-type": "text/html"}).end(data)
    })
  }
}).listen(PORT, "localhost")
