// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";


// Helper function to convert object key/value pairs to SQL syntax

  // loop through the keys and push the key/value as a string int arr

    // check to skip hidden properties

      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')

      // e.g. {name: 'Double Cheeseburger'} => ["name='Double Cheeseburger'"]
      // e.g. {Devour: true} => ["Devour=true"]

  // translate array of strings to a single comma-separated string

// Object for all our SQL statement functions.

  // An example of objColVals would be {name: panther, sleepy: true}

// Export the orm object for the model (burgers.js).
module.exports = orm;