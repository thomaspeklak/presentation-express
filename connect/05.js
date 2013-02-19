//MIDDLEWARE THAT MANIPULATES RESPONSE
"use strict";

var connect = require("connect");
var server  = connect.createServer();

server.use(function (req, res, next) {
    var end = res.end;
    res.end = function (data) {
        data = data.replace("world", "universe");
        end.call(res, data);
    };

    next();
});

server.use(function (req, res) {
    res.end("Hello world!");
});

server.listen(3003);
