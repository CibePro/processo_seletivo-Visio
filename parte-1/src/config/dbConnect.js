import mongoose from "mongoose";

mongoose.connect("mongodb+srv://romulo:123@ps.3doqmeg.mongodb.net/processo-seletivo");

let db = mongoose.connection;

export default db;