import Ticket from "@/models/ticket";
import connectDB from "@/app/lib/mongodb";
import { NextResponse} from "next/server"

export async function GET(req, {params}) {
    try {
        const {id} = params()

        const ticketData = await Ticket.findOne({_id: id})

        return NextResponse.json(
            {message: "ticket found"},
            {status: 200}
        )
    } catch (error) {
        console.error("Error Creating Ticket", error.message)

        return NextResponse.json(
            {message: "error", error: error.message},
            {status: 500}
        )
    }
}

export async function PUT(req, {params}) {
    try {
        const {id} = params()
        const body = await req.json();
        const ticketData = body.ticketForm;

        const updatedTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData
        })

        return NextResponse.json(
            {message: "ticket updated"},
            {status: 201}
        )
    } catch (error) {
        console.error("Error Creating Ticket", error.message)

        return NextResponse.json(
            {message: "error", error: error.message},
            {status: 500}
        )
    }
    
}

export async function DELETE(req, {params}) {
    try {
        const {id} = params()

        await Ticket.findByIdAndDelete(id)
        return NextResponse.json(
            {message: "ticket Deleted"},
            {status: 200}
        )
    } catch (error) {
        console.error("Error Creating Ticket", error.message)

        return NextResponse.json(
            {message: "error", error: error.message},
            {status: 500}
        )
    }
}