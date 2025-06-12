import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
import connectToDB from "./config/mongoose.config.js";
import Userrouter from "./routes/user.routes.js";
import EducationRouter from "./routes/education.routes.js"


const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser()); // Middleware to parse cookies

// Load env environment variables
dotenv.config();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Enable CORS for all routes
// Allow only your frontend domain (e.g., localhost:5173) to access the backend
const corsOptions = {
  origin: [
    "http://localhost:5173", // Allow frontend running locally
  ],
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));


// User Routes
app.use("/users", Userrouter);
app.use("/education" , EducationRouter)


app.listen(port, () => {
  console.log(`CRTD app listening on port ${port}`)
})
