import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js';
import dotenv from 'dotenv';
dotenv.config();

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, missing credentials" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, missing credentials" });
  }
};