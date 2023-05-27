const http = require('http')
const {URL} = require('url')
const routes = require('./routes')


const server = http.createServer((req, res)=> {
  const parsedURL = new URL(`http://localhost:3000${req.url}`)
  console.log(`Request method ${req.method} | Endpoint ${parsedURL.pathname}`)

  let {pathname} = parsedURL
  let id = null
  const splitEndpoint = pathname.split('/').filter(Boolean)

  if(splitEndpoint.length > 1){
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1];
  }
  console.log(splitEndpoint)
  const route = routes.find((routeObj)=>(
    routeObj.endpoint === pathname && routeObj.method === req.method
  ))
  if(route){
    req.query = Object.fromEntries(parsedURL.searchParams)
    req.params = {id};
    route.handler(req, res)
  }else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.end(`Cannot ${req.method} ${pathname}`)
  }
})
server.listen(3000, console.log('Server rodando em http://localhost:3000'))