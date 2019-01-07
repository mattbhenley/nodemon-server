const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
res.send("Contact me at mattbhenley@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I am Matt Henley, a web developer!");
});

app.get("/projects", function(req, res) {
  res.send("See my projects at copden.io!");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
