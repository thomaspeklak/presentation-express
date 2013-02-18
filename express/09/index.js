"use strict";

var express = require("express");

var app = express();

app.all("*", function (req, res, next) {
    req.user = "Admin";
    next();
});

app.get("/hello/:name", function (req, res) {
    res.send(200, "Hello " + req.user + "!");
});

app.get("/goodbye/:name", function (req, res) {
    res.send(200, "Hello " + req.user + "!");
});

app.listen(3003);

