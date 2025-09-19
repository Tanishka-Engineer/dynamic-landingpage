import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./storage.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "NextCent", // Cloudinary folder
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });
export default upload;
