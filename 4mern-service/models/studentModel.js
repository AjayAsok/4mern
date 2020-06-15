import mongoose from "mongoose";

const Schema = mongoose.Schema

export const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    regNumber: {
        type: Number,
        required: true
    },
    standard: {
        type: String,
    },
    group: {
        type: String,
        enum: ["A", "B", "C"]
    },
    grade: {
        type: Number
    },
    isEligible: {
        type: Boolean,
        default: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})