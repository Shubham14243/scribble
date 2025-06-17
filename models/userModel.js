import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'default.jpg'
    },
    totalScore: {
        type: Number,
        default: 0
    }
}, { timestamps: true, versionKey: false });

const User = mongoose.model("User", userSchema);

export { User, userSchema };
