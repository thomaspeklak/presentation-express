"use strict";

var express = require("express");
var mapParams = function (params) {
    return Object.keys(params)
        .map(function (k) {
            return [k, params[k]];
        })
        .reduce(function (prev, cur, i, params) {
            prev[cur[0]] = cur[1];
            return prev;
        }, {});
};

var app = express();

app.set('view engine', 'jade');
app.set("views", __dirname);
app.use(express.bodyParser());

app.get("/", function (req, res) {
    res.render("index");
});

app.post("/json/:name", function (req, res) {
    var obj = {
        params : mapParams(req.params),
        query  : req.query,
        body   : req.body
    };

    res.json(obj);
});

app.post("/jsonp/:name", function (req, res) {
    res.jsonp({
        params : mapParams(req.params),
        query  : req.query,
        body   : req.body
    });
});

app.post("/params/:firstName", function (req, res) {
    res.jsonp({
        firstName : req.param("firstName"),
        lastName  : req.param("lastName"),
        email     : req.param("email"),
    });
});


app.listen(3003);


