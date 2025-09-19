import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    services: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    logoURLs: {
      type: String,
    },
  },
  { timestamps: true }
);

const Clients = mongoose.model("Client", clientSchema);
export default Clients;
