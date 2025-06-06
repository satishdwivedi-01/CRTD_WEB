import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CRTD')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
