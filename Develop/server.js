const fs = require("fs");
const dbJson = require("./db/db.json");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/notes", (req, res) => {
  res.sendFile;
});

app.get("/api/notes", (req, res) => {});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
