import mongoose from "mongoose";
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

export default collection;
