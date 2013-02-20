//CONNECT MIDDLEWARE II
"use strict";

var connect = require("connect");
var server  = connect.createServer();

server
    .use(connect.static(__dirname))
    .use(connect.responseTime())
    .use(connect.query())
    .use(function (req, res) {
        res.end(JSON.stringify(req.query));
    });

server.listen(3003);

// http://localhost:3003/03.js
// http://localhost:3003?hello=world

