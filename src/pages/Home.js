import React from "react"
import myPic from "../images/myPicture.jpg"

export default function Home() {
    return (
        <div className="home--container">
            <div className="home--picture--name">
                <img className="profile-pic" src={myPic} alt="profilepic"/>
                <div className="hello">Hello! My name is</div>
                <div className="name">
                    Jack O'Brien
                </div>
            </div>
            <div className="home--intro">
                <div className="home--intro--top">
                    I am an...
                </div>
                <div className="home--intro--text">
                    ...aspiring full-stack software enginner and a current fourth-year student at the College of the Holy Cross. Please look around my page to learn more about me!
                </div>
            </div>
            
        </div>
    )
}