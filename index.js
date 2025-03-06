import express from 'express'
import mongoose from 'mongoose';
const app = express()
import connectDB from './client/db.js';
import 'dotenv/config'
import usersRouter from './routes/usersRouter.js';

  app.use('/api',usersRouter)

  connectDB();

  const db = mongoose.connection;

  db.on("error", (err) => console.error("❌ MongoDB connection error:", err));
  db.once("open", () => console.log("🚀 MongoDB connection is open and ready"));


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})