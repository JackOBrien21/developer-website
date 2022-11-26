import React from "react"
import {FaEnvelope} from "react-icons/fa"

export default function Contact() {
    return (
        <div className="contact--container">
            Feel free to reach out to me:
            <a className="email--anchor" href="mailto:jaobri23@g.holycross.edu">
                <FaEnvelope className="email--link"/>
            </a>
        </div>
    )
}