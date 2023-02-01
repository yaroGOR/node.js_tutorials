const http = require('http')

const server = http.createServer((req,res)=> {
   console.log(req.url)
   if(req.url === '/'){
   res.end('welcome to homepage')
   }
   if(req.url === '/about') {
       res.end('here is our short history')
   }
   res.end(`
   <div>
   <h1>oooooops!</h1>
   <p> wee can't seem to find the page</p>
   <a href="/"> back home</a>
   </div>
   `)
   
})

server.listen(5005)