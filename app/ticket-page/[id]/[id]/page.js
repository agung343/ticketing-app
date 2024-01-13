import TicketForm from "@/components/Form/ticketForm"

const getTicketById = async(id) => {
  const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: "no-cache"
  })

  if (!response.ok) {
    throw new Error("Could not get a ticket")
  }

  return response.json()
}

async function TicketingPage({params}) {
  const editMode = params.id === "new" ? false : true
  let updatedTicketData = {}
  
  if (editMode) {
    let updatedTicketData = await getTicketById(params.id)
    updatedTicketData = updatedTicketData.ticketData
  } else {
    updatedTicketData= {
      _id: "new"
    }
  }

  return (
    <div className="w-full">
      <TicketForm ticket={updatedTicketData} />
    </div>
  )
}

export default TicketingPage