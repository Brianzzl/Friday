const express = require("express");
// const connectDB = require("./config/db");

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on: http://localhost:${PORT}`)
);
