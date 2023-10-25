

self.addEventListener("install", ()=>{
    self.skipWaiting();

})

self.addEventListener("activate", ()=>{
  //Notificar para dar de baja otros sw
    self.clients.clain()
  
})

self.addEventListener("fetch", ()=>{
     console.log("se hace un fetch")

})