import mongoose, { connect } from "mongoose";

export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://DineNow:dinenow@cluster0.cepww.mongodb.net/food_del').then(()=>
        console.log("DB Connected"));
    
}
