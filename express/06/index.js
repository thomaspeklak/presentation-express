"use strict";

var express = require("express");

var app = express();

app.get("/hello/:name", function (req, res) {
    res.send(200, "Hello " + req.params.name + "!");
});

app.listen(3003);

