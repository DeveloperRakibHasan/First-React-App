import React from 'react'

function Hello(props){

    function DoThis(){
        alert("Button is clicked")
    }

    return(
        
        <div>
            <button onClick={DoThis}>Click me</button>
            <h1>My name is {props.name} & Age: {props.age} </h1>
        </div>
        
       
    )
}

export default Hello