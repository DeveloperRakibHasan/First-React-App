import React, {Component} from 'react'

class Welcome extends Component{

    DoThisClass(){
        alert("This Class Button is clicked")
    }

    render(){
        return <div>
     <button onClick={this.DoThisClass}>Click me</button>
         <h1>I am : {this.props.name} Age : {this.props.age}</h1>
        </div>
    
    }
}

export default Welcome