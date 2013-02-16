"use strict";

var express = require("express");

var app = express();

app.set("title", "Hello world!");
app.enable("switch");

app.get("/", function (req, res) {
    if (app.enabled("switch")) {
        app.disable("switch");
        res.send(200, "enabled");
    } else {
        app.enable("switch");
        res.send(200, "disabled");
    }
});

app.listen(3003);
