"use strict";

var express = require("express");

var app = express();

app.configure("development", function () {
    app.set("title", "Hello development!");
});

app.configure("production", function () {
    app.set("title", "Hello production!");
});

app.get("/", function (req, res) {
    res.send(200, app.get("title"));
});

app.listen(3003);
