const express = require("express");
const bodyParser = require("body-parser");
const Comment = require("./models/comment");
const cors = require("cors");
const mongoose = require("mongoose");
const comments = require("./routes/comment");
const newLocal = require("custom-env");
newLocal.env(process.env.NODE_ENV, "./config");

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/comments", comments);
app.use("/", function (req, res) { res.render("../views/addComment"); })

app.listen(process.env.PORT); 