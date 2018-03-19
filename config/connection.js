// Set up MySQL Connection
var mysql = require("mysql");

var connection = mysql.createConnectio({
    port:3306,
    host: "localhost",
    password: '',
    database: "burgers_db"
});

// Make Connection
connection.connect(function(err) {
    if(err) {
        console.error("error connecting :" +err.stack);
        return;
    }
    console.log("connection as id" + connection.threadID);
});

// Export connection for ORM
module.exports = connection;