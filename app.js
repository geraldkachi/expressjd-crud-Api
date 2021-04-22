const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodekb");

let db = mongoose.connection;

const app = express();

// texmplate engine
app.set("views", path.join(--__dirname, "views"));
app.set("views engine", "pug");

app.get("/", (req, res) => {
  let article = [
    {
      id: 1,
      title: "Article One",
      author: "Adimora Onyekachi",
      body: "Article One",
    },
    {
      id: 2,
      title: "Article Two",
      author: "Adimora Onyekachi",
      body: "Article Two",
    },
  ];
});

app.listen(4000, () => {
  console.log("Server started on port 4000...");
});

// app.get("/", function () {});

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//   },
