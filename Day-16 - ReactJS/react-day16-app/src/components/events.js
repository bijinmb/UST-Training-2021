import React from "react";

function Events(){
    const shoot = ()=> {
        alert("Great Shot!");
    }
    return(
        <button onClick={shoot}>Take the shot!</button>
    )
    
}
export default Events;