import userModel from "../models/user.model.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) return res.json({ status: false, message: "User already exist" });
        const user = await userModel.create({ name, email, password })
        if (user) return res.json({ status: true, message: "user registered", user });
        return res.json({ status: false, message: "user registration faild" });
    } catch (error) {
        return res.json({ status: false, message: error.message })
    }
}

export const getUserDate = async (req, res) => {
    const user = await userModel.find();
    return res.json({ status: true, user: user[0] })
}