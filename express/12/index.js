"use strict";

var express = require("express");

var app = express();

app.set('view engine', 'jade');
app.configure(function () {
    app.set("views", __dirname);
});

app.locals.upcase = function (text) {
    return text.toUpperCase();
};

app.get("/hello/:name", function (req, res) {
    res.render("index", {
        name: req.params.name,
        fruits: { 
            "apple": "green", 
            "orange": "orange", 
            "banana": "yellow", 
            "strawberry": "red"
        }
    });
});

app.listen(3003);


