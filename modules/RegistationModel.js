import mongoose from "mongoose";

const userReg = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
})

export default mongoose.model('reg', userReg)