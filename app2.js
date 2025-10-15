// app2.js
const movies = require("./data/movies.json");

const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());

// Simple homepage info
app.get("/", (req, res) => {
  res.send(`
    <h1>App 2 - Movies Data</h1>
    <p>Visit <a href="/movies">/movies</a> to see the movie list.</p>
  `);
});

// Route to display JSON file contents
app.get("/movies", (req, res) => {
  fs.readFile("./data/movies.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading movies.json file");
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`app2 running at http://localhost:${PORT}`);
});
