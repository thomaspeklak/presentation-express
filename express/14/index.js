"use strict";

var express = require("express");
var app = express();

app.use(express.cookieParser("My holy secret."));

app.get("/set/:name/:value", function (req, res) {
    res.cookie(req.params.name, req.params.value, { httpOnly: true, maxAge: 1000 * 60 * 5 });
    res.send("cookie stored. See it @ <a href='/get/" + req.params.name + "'>this url</a>");
});

app.get("/get", function (req, res) {
    res.json(req.cookies);
});

app.get("/clear/:name", function (req, res) {
    res.clearCookie(req.params.name);
    res.redirect("get");
});

app.listen(3003);
