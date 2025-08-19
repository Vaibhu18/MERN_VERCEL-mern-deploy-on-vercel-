import mongoose from "mongoose";

const mongodbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Mongodb is connected")
        })
        .catch(() => {
            console.log("Mongodb Connection Faild")
            process.exit(1);
        })
}

export default mongodbConnection;