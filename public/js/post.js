import mongoose from "mongoose";

const Post = new mongoose.Schema({
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true}
})

export default mongoose.model('Post', Post)