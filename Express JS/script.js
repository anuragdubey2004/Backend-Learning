// Routing and Middleware function

const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("Middleware working");
    next();
});  // middleware func

app.use(function(req, res, next){
    console.log("Middleware2 working");
    next();
});  // middleware func 

app.get('/', function(req, res){   //routing the code
    res.send("Hellow World")
})
app.get('/profile', function(req, res){
    res.send("Hellow profile")
})
app.get('/profile/:username', function(req, res){    // :username -> it gets replaced in url like /profle/harshita
    res.send(`hello from ${req.params.username}`)
})

app.listen(3000);