import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      uinque: true,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
