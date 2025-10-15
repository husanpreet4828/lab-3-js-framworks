// app3.js
const movies = require("./data/movies.json");

const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

// Home route info
app.get("/", (req, res) => {
  res.send(`
    <h1>App 3 - Movies CRUD API</h1>
    <p>Use the following routes for CRUD operations:</p>
    <ul>
      <li>GET: /api/movies</li>
      <li>POST: /api/movies</li>
      <li>PUT: /api/movies/:id</li>
      <li>DELETE: /api/movies/:id</li>
    </ul>
  `);
});

// CRUD Routes
app.get("/api/movies", (req, res) => {
  res.json({ message: "GET all movies - App 3" });
});

app.post("/api/movies", (req, res) => {
  res.json({ message: "POST new movie - App 3" });
});

app.put("/api/movies/:id", (req, res) => {
  res.json({ message: `PUT update movie ${req.params.id} - App 3` });
});

app.delete("/api/movies/:id", (req, res) => {
  res.json({ message: `DELETE movie ${req.params.id} - App 3` });
});

app.listen(PORT, () => {
  console.log(`app3 running at http://localhost:${PORT}`);
  console.log("CRUD endpoints available under /api/movies");
});
