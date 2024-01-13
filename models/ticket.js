import mongoose, {Schema} from "mongoose";

// create Schema
const ticketSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
    },
    progress: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    }
}, {
    timestamps: true
})

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket;