const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('<h1>Hello Wordl!</h1>')
})

server.listen(3000,() => console.log('Server funcionando em: http://localhost:3000'))
