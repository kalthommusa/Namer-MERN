import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true, 
      unique: true, // Ensures no duplicate emails
      lowercase: true, // Converts email to lowercase
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d+$/, "Phone number should contain only digits"], // Ensures only digits
    },
    companyName: {
      type: String,
      required: true, 
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: String,
      required: true, 
    },
    address: {
      type: String,
      required: true, 
      trim: true,
    },
    message: {
      type: String,
      required: true, 
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;