import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  const MONGO_URI = process.env.MONGO_URI as string;
  if (MONGO_URI) return console.log("Mongodb url missing");

  if (isConnected) return console.log("Mongodb is already connected");

  try {
    const res = await mongoose.connect(MONGO_URI);

    if (res) {
      isConnected = true;
      console.log("Mongodb connected");
    }
  } catch (error) {
    console.error(error);
  }
};
