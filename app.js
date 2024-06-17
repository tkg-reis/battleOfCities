const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable("x-powered-by");

app.use("/", require("./routes/index.js"));
// postの受け取り処理を可能にする
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
    console.log(`server listening http://localhost:${PORT}`)
});