const fs = require("fs");
const dbJson = require("./db/db.json");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", (req, res) => {
  const dataNotes = fs.readFileSync(
    path.join(__dirname, "./db/db.json"),
    "utf-8"
  );
  const parseNotes = JSON.parse(dataNotes);
  res.json(parseNotes);
});

app.post("/api/notes", (req, res) => {});


app.delete("/api/notes/:id", (req, res) => {
    let noteIndex = dbJson.findIndex((note) =>
});
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
