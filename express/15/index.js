"use strict";

var express = require("express");
var app = express();

app.use(express.cookieParser("My holy secret."));
app.use(express.cookieSession());

app.use(function (req, res, next) {
    req.session.count = 1 + (req.session.count || 0);
    next();
});

app.get("/", function (req, res) {
    res.send(200, "Count: " + req.session.count);
});

app.listen(3003);
