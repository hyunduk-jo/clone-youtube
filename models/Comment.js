import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  /*
  ,
  video: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Video"                //Video.js에서의 Video를 참조
  }
   */
})

const model = mongoose.model("Comment", CommentSchema);

export default model;