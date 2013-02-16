"use strict";

var connect = require("connect");
var server  = connect.createServer();

server.use(function (req, res, next) {
    if (req.url != "/hello") return next();

    res.end("Hello!");
});

server.use(function (req, res) {
    res.end("Hello world!");
});

server.listen(3003);
