1.  use express -> install package express (npm i express)
2. go express documentation and copy the usage code

const express = require('express'); // import
const app = express();    // run the function

app.get('/', function(req, res){   // default route is '/'
    res.send("Hellow World");
})

app.listen(3000);    //provide localhost to our app

*****Setup ejs -> template Engine
1. npm i ejs  //install
2. app.set("view engine", "ejs");   // configure ejs
3. ek views naam ka folder banao
4. usmein ejs files banao
5. send ki jagah render karo => render krte waqt make sure aap views folder k andr wale kisi file ka naam likhe,  aur render finction mei .esj mention naa kre


*******Setup Static Files
1. create a folder name public
2. create threee folder inside it, images, stylesheets, javascripts
3. configure the express static in script.js file
4. understand the path