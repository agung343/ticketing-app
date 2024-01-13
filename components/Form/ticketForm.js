'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketForm({ticket}) { 
    const editMode = ticket._id === "new" ? false : true
    const router = useRouter()

    const [ticketForm, setTicketForm] = useState({
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "hardware problem"
    })

    if (editMode) {
        ticketForm["title"] = ticket.title;
        ticketForm["description"] = ticket.description;
        ticketForm["priority"] = ticket.priority;
        ticketForm["progress"] = ticket.progress;
        ticketForm["category"] = ticket.category
        ticketForm["status"] = ticket.status
    }

    function handleChange(e, name) {
        setTicketForm(previousValue => {
            return {
                ...previousValue,
                [name]: e.target.value
            }
        })
    }

    async function handleSubmit (e) {
        e.preventDefault()

        if (editMode) {
            const response = await fetch(`/api/tickets/${ticket._id}`, {
                method: "PUT",
                body: JSON.stringify({ticketForm}),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error("Could not update ticket now")
            }
        } else {
            const response = await fetch("/api/tickets", {
                method: "POST",
                body: JSON.stringify({ticketForm}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
    
            if (!response.ok) {
                throw new Error("Could not create a ticket at the moment")
            }
        }
        
        console.log(response.statusText)
        router.refresh()
        router.push("/")
    }

    return(<>
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3>{editMode ? "Edit Your Ticket" : "Created New Ticket"}</h3>
                <label>Title</label>
                <input 
                 id="title" name="title" type="text" required
                 onChange={e => handleChange(e, "title")} 
                 value={ticketForm.title} 
                />

                <label>Description</label>
                <textarea 
                 id="description" name="description" required
                 onChange={e => handleChange(e, "description")} 
                 value={ticketForm.description} 
                />

                <label>Category</label>
                <select name="category" id="category" value={ticketForm.category} onChange={(e) => handleChange(e, "category")}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>

                <label>Priority</label>
                <div>
                    <input id="priority-1" name="priority" type="radio" onChange={e => handleChange(e, "priority")} value={1} />
                    <label>1</label>

                    <input id="priority-2" name="priority" type="radio" onChange={e => handleChange(e, "priority")} value={2}  />
                    <label>2</label>

                    <input id="priority-3" name="priority" type="radio" onChange={e => handleChange(e, "priority")} value={3}  />
                    <label>3</label>

                    <input id="priority-4" name="priority" type="radio" onChange={e => handleChange(e, "priority")} value={4}  />
                    <label>4</label>

                    <input id="priority-5" name="priority" type="radio" onChange={e => handleChange(e, "priority")} value={5}  />
                    <label>5</label>
                </div>

                <label>Progress</label>
                <input type="range" id="progress" name="progress" onChange={e => handleChange(e, "progress")} value={ticketForm.progress} min={0} max={100} />

                <label>Status</label>
                <select name="status" id="status" value={ticketForm.status} onChange={e => handleChange(e, "status")}>
                    <option value="Not Started">Not Staterd</option>
                    <option value="Started">Staterd</option>
                    <option value="Done">Done</option>
                </select>

                <input type="submit" className="btn" value={editMode ? "Update Ticket" : "Create Ticket"} />
            </form>
        </div>
    </>)
}