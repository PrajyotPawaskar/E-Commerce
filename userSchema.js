// import mongoose from "mongoose";

// const cartItemSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Products", // Assuming you have a Product model
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     default: 0,
//   },
// });

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   cart: [cartItemSchema], // Add the cart field using the cartItemSchema
// });

// const Users = mongoose.model("users", userSchema);

// export default Users;
