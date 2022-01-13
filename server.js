const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "/public" });
});

app.get("/resume", (req, res) => {
  fs.readFile("./public/johongir_cv.pdf", "utf-8", (err, data) => {
    if (err) {
      return res.render("404");
    }
    res.sendFile("johongir_cv.pdf", { root: "public" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
