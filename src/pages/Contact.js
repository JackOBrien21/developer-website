import React from "react"
import {FaGithub, FaLinkedinIn, FaDiscord, FaRegFileAlt} from "react-icons/fa"

export default function Contact() {
    return (
        <div className="contact--container">
            <div className="contact--subheader">
                <h1 className="contact--header">
                    Say Hello!
                </h1>
                <div>
                    Email: <a href="mailto:jaobri23@g.holycross.edu" className="email--link">jaobri23@g.holycross.edu</a>
                </div>
            </div>
            <div className="social--link--icons">
                <h2 className="social--links--header">Social Links</h2>
                <div className="list--social--icons">
                    <div className="icon--title">
                        <p className="social--title">Github</p>
                        <a href="https://github.com/JackOBrien21" className="social--icon">
                            <FaGithub className="icon"/>
                        </a>
                    </div>
                    <div className="icon--title">
                        <p className="social--title">CV</p>
                        <a href="https://resume.io/r/7kvvsAEIR" className="social--icon">
                            <FaRegFileAlt className="icon"/>
                        </a>
                    </div>
                    <div className="icon--title">
                        <p className="social--title">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/jack-o-brien-2a6653220/" className="social--icon">
                            <FaLinkedinIn className="icon"/>
                        </a>
                    </div>
                    <div className="icon--title">
                        <p className="social--title">Discord Server</p>
                        <a href="https://discord.gg/bhnZx7fxmm" className="social--icon">
                            <FaDiscord className="icon"/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}