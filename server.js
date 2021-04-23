import express from "express";
import bodyParser from "body-parser";
import path from "path";

import router from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json())


//some people uses this as body-parser // app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello kachi this you server home page")
});

app.use("/users", router);

app.listen(PORT, () => {
  console.log(`Server running on port: localhost:${PORT}`)
})

//  browsers can only make a post request and thats why we have to use postman that help us test our API

// bodyParser hanles post requrest tp the application of the backend server

// const express = require("express");
// const path = require("path");
