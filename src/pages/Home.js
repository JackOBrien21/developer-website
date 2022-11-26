import React from "react"
import myPic from "../images/myPicture.jpg"

export default function Home() {
    return (
        <div className="home--container">
            {/* <img className="profile-pic" src={myPic} alt="profilepic"/> */}
            <div className="hello">Hello! My name is</div>
            <div className="name">
                InsertNameHere
            </div>
        </div>
    )
}