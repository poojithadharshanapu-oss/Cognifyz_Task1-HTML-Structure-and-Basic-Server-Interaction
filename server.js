const express = require("express");

const app = express();
const PORT = 3000;

// To read form data
app.use(express.urlencoded({ extended: true }));

// Use EJS template engine
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    res.render("result", {
        name: name,
        email: email
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});