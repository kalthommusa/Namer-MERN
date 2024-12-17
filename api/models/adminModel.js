import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 5, // min length for username
      maxLength: 50, // max length for username
      match: [/^[a-zA-Z0-9_]+$/, 'Username must contain only alphanumeric characters and underscores'] // for preventing injection
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: { 
      type: String, 
      required: true,
      minLength: 8, // min length for password
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;