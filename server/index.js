import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", async (req, res) => {
    return res.json({ name: "Vaibhav Shinde" })
})

app.listen(3000, () => {
    console.log("Server start on port 3000")
})

