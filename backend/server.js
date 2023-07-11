const mongoose = require("mongoose");
const express = require("express");
const tasksRoute = require("./routes/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", tasksRoute);

app.get("/", (req, res) => {
  try {
    res.status(200).send("Home Page!");
  } catch (error) {
    res.status(500).send(error);
  }
});
//server start
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(PORT, () =>
      console.log(`The server is up on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));
