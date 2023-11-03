var http = require("http")
var url  = require("url")
var routes = require('routes')()

routes.addRoute("/", function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("Home")
})
routes.addRoute("/welcome", function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Anonymous")
})
routes.addRoute("/welcome/:nama", function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Selamat datang "+this.params.nama)
})
http.createServer(function(req, res){
    var path = url.parse(req.url).pathname
    var match = routes.match(path)
    if(match){
        match.fn(req, res)
    }else{
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.end("Page Not Found")
    }
}).listen(5000)
console.log("Apps Running")