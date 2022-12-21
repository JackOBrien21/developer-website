import React from "react"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"

export default function Navbar() {

    const [showLinks, setShowLinks] = React.useState(false)
    const linksContainerRef = React.useRef(null)
    const linksRef = React.useRef(null)

    const toggleLinks = () => {
        console.log(showLinks)
        setShowLinks(!showLinks)
    }

    React.useEffect( () => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        console.log(linksHeight)
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = "0px"
        }

    }, [showLinks])

    return (
        <nav>
            <div className="navbar--component">
                <div className="navbar--header">
                    <div className="homepage--button">
                        <Link to="/" className="my--name">InsertNameHere</Link>
                    </div>
                    <button className="navbar--toggle" onClick={toggleLinks}>
                        <FaBars className="navbar--toggle"/>
                    </button>
                </div>
                
                <div className="navbar--links--list--container" ref={linksContainerRef}>
                    <ul className="navbar--links--list" ref={linksRef}>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to ="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
        
    )
}