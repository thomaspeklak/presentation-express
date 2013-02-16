"use strict";

var connect = require("connect");
var server  = connect.createServer();

var admin = connect(function (req, res) {
    res.end("@admin");
});

var main = connect(function (req, res) {
    res.end("@main");
});

server
    .use("/admin", admin)
    .use("/", main);

server.listen(3003);

// http://localhost:3003
// http://localhost:3003/main

