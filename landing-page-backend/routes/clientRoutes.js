import express from "express";
import { addClient, getActiveClients, getAllClients, getClientById } from "../controllers/clientController.js";
import upload from "../cloud/storageHelper.js";

const router = express.Router();

router.post(
  "/add-client", 
  upload.single("File"), 
  addClient
);

router.get(
  "/get-all-client", 
  getAllClients
);

router.get(
  "/get-client/:id",  
  getClientById
);

router.get(
  "/get-all-active-client",  
  getActiveClients
);

export default router;
