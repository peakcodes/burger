var express = require("express");

var router = express.Router();
// import the model burger.js to use for db functions
var burger = require("../models/burger.js");

// Create all the routes and set up logic where routimg are required
router.get("/", function (req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {
    burger.all(function (data) {
        // (hbs is handlebars)
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})
// Create Burger
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devour"], [req.body.burger_name, req.body.devour],
        // send back id of new burger
        function (result) {
            res.json({
                id: result.insertId
            });
        });
});

// Devoured burger
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("conidition", conidition);

    burger.update({
            devour: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

// Export routes for Server.js use
module.exports = router;