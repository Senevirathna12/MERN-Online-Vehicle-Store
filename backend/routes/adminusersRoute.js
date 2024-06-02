import express from "express";
import { Admin } from "../models/adminuserModel.js";

const router = express.Router();

// Login Route
router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      res.send(admin);
    } else {
      res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Register Route
router.post("/adminregister", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res.status(400).json({ message: "Username is already in use" });
    }

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    return res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


export default router;
