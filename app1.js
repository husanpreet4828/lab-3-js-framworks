// app1.js
const express = require("express");
const app = express();
const PORT = 3000;

// Home route showing group members
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to JavaScript Frameworks Lab 3</h1>
    <h2>Group Members:</h2>
    <ul>
      <li>Husanpreet Kaur</li>
      <li>Jashandeep Kaur</li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`app1 running at http://localhost:${PORT}`);
});
