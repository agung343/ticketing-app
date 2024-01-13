import TicketCard from "@/components/TicketCard"

async function getTicket() {
  try {
    const response = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-cache"
    })

    if (!response.ok) {
      throw new Error("Could not get the tickets")
    }

    return response.json()
  } catch (error) {
    
  }
}

export default async function Dashboard() {
  const data = await getTicket()

  if (!data || data?.tickets || data.tickets.length === 0) {
    return <p>No ticket issue yet!</p>
  }

  const tickets = data.tickets

  const uniqueCategories = [...new Set(tickets.map(({category}) => category))]

  return (
    <div className="p-5 w-full">
      <div>
        {tickets && uniqueCategories?.map((unique, index) => (
          <div key={index} className="mb-4">
            <h2>{unique}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets.filter(ticket => ticket.category === uniqueCategories).map((filterCategory, _index) => (
                <TicketCard id={_index} key={_index} ticket={filterCategory} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  )
}
