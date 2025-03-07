import express from 'express'
import mongoose from 'mongoose';
import connectDB from './client/db.js';
import 'dotenv/config'
import usersRouter from './routes/usersRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import authRouter from './routes/authRouter.js';

  const app = express()
  
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use('/api',usersRouter)
  app.use('/api',recipesRouter)
  app.use('/api',authRouter)
  connectDB();

  const db = mongoose.connection;

  db.on("error", (err) => console.error("❌ MongoDB connection error:", err));
  db.once("open", () => console.log("🚀 MongoDB connection is open and ready"));


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})