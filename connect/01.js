"use strict";

var connect = require("connect");

connect.createServer(function (req, res) {
    res.end("Hello World!");
}).listen(3003);
