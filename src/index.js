const http = require('http')
const {URL} = require('url')
const routes = require('./routes')
const server = http.createServer((req, res)=>{
  const parsedURL = new URL(`http://localhost:3000${req.url}`);
  console.log()
  console.log(`Request method: ${req.method} | Endpoint: ${parsedURL.pathname}`)
  const route = routes.find((routeOBJ)=>(
    routeOBJ.endpoint === parsedURL.pathname && routeOBJ.method === req.method
  ))
    if(route){
      req.query = Object.fromEntries(parsedURL.searchParams)
      route.handler(req, res)
    }else{
      res.writeHead(404, {'content-type': 'text/html'})
      res.end(`Cannot ${req.method} ${parsedURL.pathname}`)
    }

})

server.listen(3000, console.log('Server funcinando em http://localhost:3000'))