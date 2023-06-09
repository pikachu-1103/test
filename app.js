const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    const firstName = req.body.first;
    const lastName = req.body.last;
    const age = req.body.age;
    res.write("<h1>Your name is <em>"+firstName +" "+ lastName+"</em>.</h1>");
    res.write("<h2>Your age is <em>"+ age +"</em>.</h2>")
    res.send();
});

app.listen(port,function() {
    console.log("Server running on port " + port + ".");
});