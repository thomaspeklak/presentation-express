//MODULAR APPS
"use strict";

var express = require("express");

//AUTH APP
var auth = express();
auth.get("/", function (req, res) {
    res.send("<form method='POST'><input type='submit'/></form>");
});

auth.post("/", function (req, res) {
    req.session.user = 1;
    res.redirect("/");
});

//MAIN APP
var app = express();

app.use(express.cookieParser("My holy secret."));
app.use(express.cookieSession());

app.use("/login", auth);

//REQUIRE USER
app.use(function (req, res, next) {
    if (!req.session.user) return res.redirect("/login");
    next();
});

app.get("/", function (req, res) {
    res.json(req.session);
});

app.listen(3003);
