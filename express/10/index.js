"use strict";

var express = require("express");

var app = express();

app.configure(function () {
    app.set("views", __dirname);
});

app.get("/hello/:name", function (req, res) {
    res.render("index.jade", {
        name: req.params.name
    });
});

app.listen(3003);


