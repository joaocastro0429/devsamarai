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
   const id= customers[customers.length - 1].id + 1;
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

  server.put("/customers/:id",(request,response)=>{
    const {id}= request.params
    const {name,site}=request.body
    const customerIndex=customers.findIndex(user=>user.id===+id)
    if(!customerIndex){
        customers[customerIndex].name=name
        customers[customerIndex].site=site
    }
    return response.status(200).json(customers[customerIndex])
})

server.delete("/customers/:id",(request,response)=>{
    const {id}=request.params
    const indexTd=customers.findIndex(user=>user.id===+id)

    customers.splice(indexTd,1)

    return response.status(204).json()


    customers.splice(i, id)
})

  server.listen(3333,()=>{
    console.log("Server running on port 3333")
  })