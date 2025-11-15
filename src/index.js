import connectDB from './db/db.js'
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

connectDB();