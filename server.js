var express = require('express');
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
// CAN I MAKE THIS ANYTHING?

var app = express();
// Serve sttis content for app from the public directory in the app
app.use(express.static("public"));

// parse application/ url encoded ?
 
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/lson
app.use(bodyParser.json());

var exhps = require("express-handlebars");

app.enginge("handlebars", exhps({ defaultLayout: "main" }));
app.set("view enginge", "handlebars");

// import routes and give the server access to them.
var routes = require("./controllers/burger_Controller.js");

app.use(routes);

// Start the server so that it can listen for client requests
app.listen(PORT, function(){
    // provide response to know server is live
    console.log("Server listening on : http://localhost:" + PORT);
});

