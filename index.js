const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Welcome to my Dockerized Node.js Application with GitHub Actions CI/CD!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is running successfully"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});