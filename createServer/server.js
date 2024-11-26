const http = require('http');
const fs = require('fs');
const port = 3002;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":'text/html',
    })
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err;
        res.end(data)
    })
})

server.listen(port,()=>{
    try{
        console.log('listening on port : ',port);
    }catch(e){
        console.error('Server Error',e.message)
        process.exit(1)
    }
})