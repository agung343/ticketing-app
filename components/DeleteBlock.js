'use client'

import { useRouter } from "next/navigation";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DeleteBlock ({id}) {
    const router = useRouter()

    async function deleteHandler() {
        const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: "DELETE",
        })

        if (response.ok) {
            router.refresh()
        }
    }

    return(
        <FontAwesomeIcon icon={faX} className="text-red-400 cursor-pointer hover:text-red-200" onClick={deleteHandler} />
    )
}