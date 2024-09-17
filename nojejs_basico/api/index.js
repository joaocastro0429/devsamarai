const express = require ("express")

const server=express()


let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" }
  ];

  server.get("/",(request,response)=>{
    return response.json({message:"Hello World"})

  })

  server.listen(3333,()=>{
    console.log("Server running on port 3333")
  })