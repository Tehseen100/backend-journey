import { app } from './app.js';
import connectDB from './db/db.js'
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`MongoDB Connection Failed: ${err}`);
    })