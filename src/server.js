import "../db";
import dotenv from "dotenv";
import app from "../app";
import "../models/Video";
import "../models/Comment";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

// port해당 포트에서 request하기를 기다림
app.listen(PORT, handleListening);
