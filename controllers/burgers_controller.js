var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

// GET route to select all burgers
router.get("/", function(req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data,
        };
        res.render("index", hbsObject);
    });
});

// POST route for putting in a new burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

// UPDATE route for changing the status of a burger
router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        req.params.id,
        function (result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
