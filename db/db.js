import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// const URL = 'mongodb://127.0.0.1/crud';
const URL =process.env.MOGO_URL

const connectDB  = async ()  =>{
   try{ 
   
   await mongoose.connect(URL,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
    });
    console.log('db connected succesfully');

   }catch(err){
     console.log('error while Connecting database',err);
   }
};
export default connectDB;