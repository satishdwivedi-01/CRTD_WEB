import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
import connectToDB from "./config/mongoose.config.js";
import Userrouter from "./routes/user.routes.js";
import EducationRouter from "./routes/education.routes.js"
import careerGuidenceRouter from "./routes/careerGuidence.routes.js"
import passRouter from "./routes/updatePass.routes.js"


const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser()); // Middleware to parse cookies

dotenv.config();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

const corsOptions = {
  origin: [
    "http://localhost:5173", 
  ],
  credentials: true, 
};

app.use(cors(corsOptions));


// User Routes
app.use("/users", Userrouter);
app.use("/education" , EducationRouter)
app.use("/careerGuidence", careerGuidenceRouter)
app.use("/password" , passRouter)


app.listen(port, () => {
  console.log(`CRTD app listening on port ${port}`)
})
