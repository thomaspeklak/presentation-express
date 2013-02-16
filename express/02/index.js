"use strict";

var express = require("express");

var app = express();

app.set("title", "Hello world!");

app.get("/", function (req, res) {
    res.send(200, app.get("title"));
});

app.listen(3003);
