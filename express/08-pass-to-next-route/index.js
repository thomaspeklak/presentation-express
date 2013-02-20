//PASS TO THE NEXT MATCHING ROUTE
"use strict";

var express = require("express");

var app = express();

app.param("name", function (req, res, next, name) {
    req.params.name = name.replace("rl", "o");
    next();
});

app.get("/hello/*", function (req, res, next) {
    if (isNaN(parseInt(req.params[0], 10))) return next();

    res.send(200, "Hello number!");
});

app.get("/hello/:name", function (req, res) {
    res.send(200, "Hello " + req.params.name + "!");
});

app.listen(3003);

