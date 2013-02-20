//BUILT IN MIDDLEWARE
"use strict";

var express = require("express");
var app = express();


app.use(express.basicAuth("admin", "secret"));
app.use(express.directory(__dirname + "/photos", {icons: true}));
app.use(express.static(__dirname + "/photos"));

app.listen(3003);
