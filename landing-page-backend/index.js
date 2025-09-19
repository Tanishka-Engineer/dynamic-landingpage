const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = "your_jwt_secret_key"; // keep it secure!

// Registration endpoint
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).send({ error: "User already exists" });
    }
});

// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).send({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.send({ message: "Login successful", token });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
