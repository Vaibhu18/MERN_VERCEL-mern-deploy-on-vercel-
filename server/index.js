import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())

app.get("/vaibhav", async (req, res) => {
    return res.json({ name: "Hey Vaibhav Shinde" })
})
app.get("/onkar", async (req, res) => {
    return res.json({ name: "Hey Onkar Shinde" })
})

app.listen(3000, () => {
    console.log("Server start on port 3000")
})

