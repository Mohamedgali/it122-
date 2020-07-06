

//http codes 200s, 400s, 500s

//learn how to respond with some html contant and the the count of the items 
//listen to call coming to a specific path such as /home or /about 
//enlist paths and respond to good path with 200 and some data 
//bad path gets 404


const movies = require ('./data')
 
const http = require("http");
 
http.createServer((req,res) => {
   var path = req.url.toLowerCase();
 switch(path) {
   case '/':
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end(movies.getAll().length.toString());
   break;
   case '/about':
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end('about');
         console.log('about me')
   break;
   default:
         res.writeHead(404, {'Content-Type': 'text/plain'});
         res.end('404:Page not found.');
     }
}).listen(process.env.PORT || 3000)
 
