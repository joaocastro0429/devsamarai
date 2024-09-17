const express = require ("express")

const server=express()


let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" }
  ];

  server.use(express.json())

  server.get("/",(request,response)=>{
    return response.json({message:"Hello World"})

  })

//   criar 
server.post("/customers",(request,response)=>{
   const {name,site}=request.body
   const {id}=customers[customers.length-1]+1;
   const newCustomer={
     id ,
     name,
     site
   }
   customers.push(newCustomer)
   return response.status(201).json(newCustomer)
  })
//   listagem 
  server.get("/customers",(request,response)=>{
    return response.status(200).json(customers)

  })
  server.get("/customers/:id",(request,response)=>{
    const {id}=request.params
    const customer=customers.find(user=>user.id===+id)

    if(!customer) return response.status(404).json({message:"Customer not found"})

    return response.status(200).json(customers)

  })


  server.listen(3333,()=>{
    console.log("Server running on port 3333")
  })