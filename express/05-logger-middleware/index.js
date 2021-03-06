//LOGGER MIDDLEWARE
"use strict";

var express = require("express");

var app = express();

app.configure("development", function () {
    app.set("title", "Hello development!");
});

app.use(function (req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
});

app.get("/", function (req, res) {
    res.send(200, app.get("title"));
});

app.listen(3003);

