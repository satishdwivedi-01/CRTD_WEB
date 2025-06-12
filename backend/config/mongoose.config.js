import mongoose from "mongoose";


async function connectToDB() {
  await mongoose.connect(process.env.MONGO_url).then(()=>{
    console.log('connected to database',process.env.MONGO_url)
  });
}

export default connectToDB