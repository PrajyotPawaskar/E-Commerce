import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: Number,
  img: String,
  name: String,
  route: String,
});

const AllCategories = mongoose.model("categories", categorySchema);

export default AllCategories;
