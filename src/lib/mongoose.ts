import mongoose from "mongoose";

const connectionToDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const mongoUri = process.env.MongoURL;

    if (!mongoUri) {
      throw new Error("MongoURL is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    throw error;
  }
};

export default connectionToDb;
