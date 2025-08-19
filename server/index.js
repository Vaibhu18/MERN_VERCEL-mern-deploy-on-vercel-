import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"

const app = express();
app.use(cors());
app.use(express.json())

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model("User", userSchema)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongodb is connected")
    })
    .catch(() => {
        console.log("Mongodb Connection Faild")
    })

app.post("/api/register-user", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) return res.json({ status: false, message: "User already exist" });
        const user = await userModel.create({ name, email, password })
        if (user) return res.json({ status: true, message: "user registered" });
        return res.json({ status: false, message: "user registration faild" });
    } catch (error) {
        return res.json({ status: false, message: error.message })
    }
})



app.listen(3000, () => {
    console.log("Server start on port 3000")
})

