const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", (res, res) => {});

app.post("/todo", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  console.log("serted started at " + PORT);
});
