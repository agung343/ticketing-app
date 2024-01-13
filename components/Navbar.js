import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-nav p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="icon" /> <span className="text-blue-accent">Home</span>
                </Link>
                <Link href="/ticket-page/new">
                    <FontAwesomeIcon icon={faTicket} className="icon" /> <span className="text-blue-accent">New</span>
                </Link>
            </div>
        </nav>
    )
}