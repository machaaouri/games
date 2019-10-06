import * as mongoose from 'mongoose';


// Publisher Schema
const publisherSchema = new mongoose.Schema({
    name: { type: String},
    siret: { type: Number},
    phone: String
})


// Game Schema
export const GameSchema = new mongoose.Schema({
    title: { type: String},
    price: { type: Number},
    publisher:  publisherSchema,
    tags: [String],
    releaseDate: {type:Date, default: Date.now}
})