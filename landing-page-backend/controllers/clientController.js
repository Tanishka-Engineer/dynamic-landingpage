import Clients from "../models/clientModel.js";

export const addClient = async (req, res) => {
  try {
    const { clientName, description, services } = req.body;

    // Validation
    if (!clientName) {
      return res.status(400).json({
        success: false,
        message: "Client name is required",
      });
    }

    // Check duplicate
    const existingClient = await Clients.findOne({ clientName });
    if (existingClient) {
      return res.status(400).json({
        success: false,
        message: "Client already exists",
      });
    }

    // Logo upload (from multer-cloudinary)
    let logoURL = "";
    if (req.file && req.file.path) {
      logoURL = req.file.path; 
    }

    const client = new Clients({
      clientName,
      description,
      services,
      logoURLs: logoURL,
    });

    await client.save();

    return res.status(201).json({
      success: true,
      message: "Client added successfully",
      client,
    });
  } catch (err) {
    console.error("Add Client error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Server error",
    });
  }
};

export const getAllClients = async (req, res) => {
  try {
    const clients = await Clients.find();

    return res.status(200).json({
      success: true,
      message: "Clients fetched successfully",
      clients,
    });
  } catch (err) {
    console.error("Get All Clients error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Server error",
    });
  }
};

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Clients.findById(id);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Client fetched successfully",
      client,
    });
  } catch (err) {
    console.error("Get Client by ID error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Server error",
    });
  }
};

export const getActiveClients = async (req, res) => {
  try {
    const clients = await Clients.find({ isActive: true });

    if (!clients || clients.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No active clients found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Active clients fetched successfully",
      clients,
    });
  } catch (err) {
    console.error("Get Active Clients error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Server error",
    });
  }
};
