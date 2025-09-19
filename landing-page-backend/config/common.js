import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Environment variables (recommended)
export const JWT_SECRET = process.env.JWT_SECRET_TOKEN;
export const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || "1h";