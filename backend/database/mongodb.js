import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        console.log("Mongo_URI: ", process.env.DB_URI);
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`MongoDB connected to ${conn.connection.host}`);
    }catch(err){
        console.log("Error connecting to MongoDB server",err.message);
        process.exit(1);
    }
}