const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static("./auth"));

app.get("/zAlice", (req, res) => {
    res.status(200).send("ok");
});

app.post("/auth", (req, res) => {
    console.log(req.body.username)
    res.status(200).send("ok");
});

app.get("/zAlice/auth", (req, res) => {
    console.log(req.body);
    console.log(req.query);

    res.status(200).send("ok");
})

app.listen(80, () => console.log("listen 80"));