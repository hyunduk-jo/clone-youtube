import app from "./app";
import "./db";
import dotenv from "dotenv";

import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`✅Listeninng on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);