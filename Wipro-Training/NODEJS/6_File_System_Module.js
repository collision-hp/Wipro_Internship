var fs=require("fs")
var http=require("http")
var url=require("url")
fs.readFile("./Sample.txt",function(error,data){
    if(error){
        console.log(error)
    }
    else{
        console.log(data) // This gives the ascii code of the data
        console.log(data.toString())
    }
})
// to add text to the sample file
fs.appendFile("./Sample.txt","Name-Satyabrata Champati, City-Bhubaneswar",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Success")
    }
})

fs.unlink("./Sample2.txt",function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("File deleted Thank You!!")
    }
})

http.createServer(function(req,res){
    if(req.url == "./favicon.ico"){
        res.writeHead(200);
        console.log("Favicon request")
    }
    else{
        var data=url.parse(req.url,true).query;
        var finaldata=data.name+data.mail+data.mail+"\n" 
        fs.appendFile("./mywebfile.txt",finaldata,function(error){
            if(error){
                console.log(error)
            }
            else{
                console.log("Data is being written.")
            }
        })
    }
    res.end("The data is writen successfully")
}).listen(8000)


