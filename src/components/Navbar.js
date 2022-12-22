import React from "react"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from '../context'


export default function Navbar() {
    const {showLinks, setShowLinks, toggleLinks, windowWidth} = useGlobalContext()
    const linksContainerRef = React.useRef(null)
    const linksRef = React.useRef(null)

    React.useEffect( () => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        console.log(linksHeight)
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = "0px"
        }

    }, [showLinks])

    let showOrHideNav = (showLinks) ? "show--navbar--component" : "hide--navbar--component"
    showOrHideNav = (windowWidth <= 800) ? "show--navbar--component" : "hide--navbar--component"

    return (
        <nav>
            <div className={showOrHideNav}>
                <div className="navbar--header">
                    <div className="homepage--button">
                        <Link to="/" className="my--name">Jack O'Brien</Link>
                    </div>
                    <button className="navbar--toggle" onClick={toggleLinks}>
                        <FaBars className="navbar--toggle"/>
                    </button>
                </div>
                
                <div className="navbar--links--list--container" ref={linksContainerRef}>
                    <ul className="navbar--links--list" ref={linksRef}>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to="/" onClick={toggleLinks}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to="/about" onClick={toggleLinks}>
                                About
                            </Link>
                        </li>
                        <li className="navbar--list--item">
                            <Link className="hover-underline-animation" to ="/contact" onClick={toggleLinks}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}