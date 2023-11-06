const express = require("express");

let publications = [];

const server = express();

server.use(express.json());


server.post('/posts', (req, res) => {
  const { author, title, contents } = req.body;

  //if(!author || title || !contents){
    //return res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"})
  //}
  if(author&&title&&contens){
    const publication = {
    author,
    title,
    contents,
    id: id++
    }
    publications.push(publication);

    res.status(200).json(publication)
  }
  else {
      return res.status(400).json({error:"No se recibieron los parámetros necesarios para crear la publicación" })
  }
});


server.get('/posts', (req, res) => {
  const { author, title } = req.query;

  if(author&&title){
    const publicationsFiltered = publications.filter(publi => publi.author === author && publi.title === title);

    publicationsFiltered.length
    ? res.status(200).json(publicationsFiltered)
    : res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
  }
  else {
    return res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
  }
})


server.get('/posts/:author', (req, res) => {
  //const { author } = req.params;
  //const publicationsFiltered = publications.filter(publi => publi.author === author);

  //if(publicationsFiltered.length){
    
    //    return res.status(200).json(publicationsFiltered);
  //}
 
   //return res.status(400).json({error: "No existe ningun post del autor indicado"})

   const { author } = req.params;

if(author){
  const publicationsFiltered = publications.filter(publi => publi.author === author);

    publicationsFiltered.length
    ? res.status(200).json(publicationsFiltered)
    : res.status(404).json({error: "El author no se encuentra en nustra base de datos"})
}
else{
   return res.status(400).json({error: 'El author no fue brindado'})
}
})

server.get('/posts', (req, res) => {
  const { author, title } = req.query;

  if(author&&title){
    const publicationsFiltered = publications.filter(publi => publi.author === author && publi.title === title);

     publicationsFiltered.length
     ? res.status(200).json(publicationsFiltered)
     : res.status(400).json({error: "No existe ninguna publicación del autor indicado"})
  }
  else{
    return res.status(400).json({error: "No existe ninguna publicación del autor indicado"})
  }
})

server.put('/posts/id', (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.bobdy;

  if(titl&&contents&&id){
    const publicationId = publications.find(publi => publi.id === Number(id))

    !publicationId
    ? res.status(400).json({error: "No se recibió el id de la publicación a eliminar"})

    : (
      publicationId = {... publicationId, title, contents}
       && res.status(200).json(publicationId)
    )
  }
  else {
    return res.status(400).json({error: "No se recibieron los parametros necesarios para modificar la publicacion"})
  }
})

server.delete('/posts/:id', (req, res) => {
  const { id } = req.params;

  if(!id){
    return res.status(400).json({error: "No se recibió el id de la publicación a eliminar"})
  }
  else{
    let publicationsFiltered = publications.filter(publi => publi.id !== Number(id))

    if(publications.length === publicationsFiltered.length){
      return res.status(400).json({ error: "No se recibió el id necesario para eliminar la publicacion "})
    }

    publications = publicationsFiltered;

    res.status(200).json({ success: true })
  }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
