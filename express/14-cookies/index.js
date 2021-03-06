//COOKIES
"use strict";

var express = require("express");
var app = express();

app.use(express.cookieParser("My holy secret."));

app.get("/set/:name/:value", function (req, res) {
    res.cookie(req.params.name, req.params.value, { httpOnly: true, maxAge: 1000 * 60 * 5 });
    res.send("cookie stored. See it @ <a href='/get'>this url</a>");
});

app.get("/signed/:name/:value", function (req, res) {
    res.cookie(req.params.name, req.params.value, { maxAge: 1000 * 60 * 5, signed: true });
    res.send("cookie stored. See it @ <a href='/get'>this url</a>");
});

app.get("/get", function (req, res) {
    res.json({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    });
});

app.get("/clear/:name", function (req, res) {
    res.clearCookie(req.params.name);
    res.redirect("get");
});

app.listen(3003);
