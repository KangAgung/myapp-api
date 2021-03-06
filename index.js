const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.listen(port,function (err) {
    if (err) throw err;
    console.log("Server started on port : "+ port);
});