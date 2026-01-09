// ejs -> template engine 

const express = require('express'); 
const app = express(); 

 app.set("view engine", "ejs"); 

app.get('/', function(req, res){   
    res.render("index", {age:12});    //send -> render and jahan jahan "age" hoga site mei wahan age ki value ho jayegi
})

app.listen(3001);