import React from "react"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from '../context'


export default function Navbar() {
    const {showLinks, setShowLinks} = useGlobalContext()

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const linksContainerRef = React.useRef(null)
    const linksRef = React.useRef(null)

    const toggleLinks = () => {
        console.log(showLinks)
        setShowLinks(!showLinks)
    }

    React.useEffect( () => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, []);

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

    return (
        <nav>
            <div className={showOrHideNav}>
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