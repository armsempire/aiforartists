
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Unda Portale Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
