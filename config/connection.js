// Set up MySQL Connection
var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);

var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Make Connection
connection.connect(function(err) {
    if(err) {
        console.error("error connecting :" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;