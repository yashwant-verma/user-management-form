const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(" Connected to MongoDB Atlas"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const UserSchema = new mongoose.Schema({
    name: String,
    dob: String,
    contact: String,
    fatherName: String,
    motherName: String,
    address: String,
    email: String,
    college: String
});
const User = mongoose.model("User", UserSchema);

app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User added successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
