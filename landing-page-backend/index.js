import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);

//for testing
app.get('/', (req, res) => res.send('Auth API up'));

// Wait for MongoDB connection before starting server
connectDB().then(() => {
  console.log("MongoDB connected.");
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err);
});