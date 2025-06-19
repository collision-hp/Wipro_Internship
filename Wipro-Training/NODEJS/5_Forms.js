var http=require("http")
url=require("url")
http.createServer(function(req,res) {
    var obj=url.parse(req.url,true).query;

    //for accepting some data from the client
    res.end("last line "+obj.name+" and your age is "+obj.age );//return statement used to terminate the program
}).listen(8090)