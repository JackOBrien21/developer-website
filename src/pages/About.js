import React from "react"

export default function About() {

    return (
        <div className="about--container">
            <div className="about--passage">
                <h3>About me</h3>
                My name is Jack O'Brien and I am a senior at the College of the Holy Cross and an aspiring software-developer. I major in both Mathematics and Computer Science with a love for learning new things. I have a strong command over algorithmic concepts and data structure with languages such as Python and Java as well as a newfound passion for frontend development with HTML, CSS, JavaScript, and ReactJS.
                {/* passage about myself, TAing */}
            </div>
            <div>
                <h3>Elective Coursework</h3>
                <ul>
                    <li>
                        Artificial Intelligence
                    </li>
                    <li>
                        Computer Networking
                    </li>
                    <li>
                        Mathematical Modeling
                    </li>
                    <li>
                        Probability Theory
                    </li>
                    <li>
                        Numerical Analysis
                    </li>
                    <li>
                        Databases (Spring 2023)
                    </li>
                </ul>
                {/* elective coursework */}
            </div>
            <div>
                {/* toolbox */}
            </div>
        </div>
    )
}