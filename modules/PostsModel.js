import mongoose from "mongoose";

const postReg = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('post', postReg)