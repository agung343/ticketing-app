import Ticket from "@/models/ticket";
import connectDB from "@/app/lib/mongodb";
import {NextResponse} from "next/server"

export async function GET() {
    try {
        const tickets = await Ticket.find()

        return NextResponse.json({tickets}, {status: 200})
    } catch (error) {
        console.error("Error Creating Ticket", error.message)

        return NextResponse.json(
            {message: "error", error: error.message},
            {status: 500}
        )
    }
}

export async function POST(request) {
    try {
        const body = await request.json()
        const ticketData = body.ticketForm
        await connectDB()
        await Ticket.create(ticketData)

        return NextResponse.json(
            {message: "Ticket created"},
            {status: 201}
        )
    } catch (error) {
        console.error("Error Creating Ticket", error.message)
        return NextResponse.json(
            {message: "Error", error: error.message},
            {status: 500}
        )
    }
}