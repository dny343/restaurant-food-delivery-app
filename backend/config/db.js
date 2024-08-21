import mongoose from "mongoose";

export const connectDB = async() => {
await mongoose.connect('mongodb+srv://dnynshwrshinde007:Dbs_12890@cluster0.z1c2oyf.mongodb.net/food-delivery').then(()=>console.log('DB Connected'))
}
