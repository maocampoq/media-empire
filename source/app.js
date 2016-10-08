/**
 * Created by manuelo on 10/7/2016.
 */
var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {

    var inputUrl = url.parse(req.url, true);
    console.log(req.url);
    if(inputUrl.pathname == '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var d = new Date(inputUrl.query.iso);
        var r = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
        return res.end(JSON.stringify(r));
    }
    else if(inputUrl.pathname == '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({"unixtime" : new Date(inputUrl.query.iso).getTime()}));
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end('Not Found')
    }
});

server.listen(8081, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:8081");
});

