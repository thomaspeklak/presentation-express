//MIDDLEWARES
"use strict";

var express = require("express");
var app = express();

app.use(express.cookieParser("My holy secret."));
app.use(express.cookieSession());
app.configure("development", function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure("production", function () {
    app.use(express.errorHandler());
});

app.use(function (req, res, next) {
    req.session.count = 1 + (req.session.count || 0);
    next();
});

var loadUser = function (req, res, next) {
    req.user = { name: "Enno" };
    next();
};

var requireAdmin = function (req, res, next) {
    if (req.user.admin !== true) {
        return next(401);
    }
    next();
};

app.get("/", loadUser, function (req, res) {
    res.send(200, "Count: " + req.session.count);
});

app.get("/admin", [loadUser, requireAdmin], function (req, res) {
    res.send(200, "Count: " + req.session.count);
});

app.listen(3003);
