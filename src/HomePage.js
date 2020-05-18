import React from "react";
import Pizza from "./img/Pizza.jpg";

export default function HomePage() {
    return (
        <div> 
            <div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Help</a>
                </nav>
                <br></br>
                <h2> <img src={Pizza} alt={"pizza"} height="100px" /></h2>
            </div>
        </div>
    )
}