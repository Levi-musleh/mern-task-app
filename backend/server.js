const express = require("express");
const process = require("process");

const app = express();
const PORT = process.env.PORT || 5000;

//Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () =>
  console.log(`server is live on http://localhost:${PORT}`)
);
