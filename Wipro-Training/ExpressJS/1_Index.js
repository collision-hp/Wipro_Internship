var exp=require('express');
var bodyParser=require("body-parser")
var urlencodedparser=bodyParser.urlencoded({extended:false})
var app=exp();
//Cookies
var cookieparser=require("cookie-parser")
app.use(cookieparser());

//session
var sess=require("express-session")
app.use(sess({secret:"sample key"}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/2_html.html")
    sess.login=1;
});
// app.get("/data",function(req,res){
//     // res.send("Welcome to our website");
//     res.send("welcome "+req.query.name+" to the website please confirm your age is= "+req.query.age+" and your mail is "+req.query.mail)
// })

app.post("/data",urlencodedparser,function(req,res){
    var response={
        name:req.body.name,
        age:req.body.age,
        mail:req.body.mail

    }

    if(sess.login==1){
        res.send("Welcome to the website")
    }
    else{
        res.sendFile(__dirname+"/2_html.html")
    }
    // res.cookie("name",req.body.name)
    // res.send("cookie is set on the client")
    // res.send(JSON.stringify(response))
});
app.listen(8090)