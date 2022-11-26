import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar--component">
            <Link to="/" className="my--name">InsertNameHere</Link>
            <ul className="navbar--links--list">
                <li>
                    <Link to="/" className="underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link to ="/contact" className="underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}