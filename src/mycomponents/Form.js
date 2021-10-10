import React, { Component } from 'react';

class Form extends Component {

        constructor(){
                super()
                this.state={
                        name: " "
                }
        }


        onChangeHandel=(event)=>{
                        var newChange = event.target.value;
                        this.setState({name:newChange})

        }


        
        render() {
                return (
                        <div>
                                <form>
                                <p>Your Text : <b>{this.state.name}</b></p> 
                        
                                        <input onChange={this.onChangeHandel} type="text" placeholder="Your Name"></input> <br></br>
                                        <input type="submit" value="Submit Now"></input>
                                </form>
                        </div>
                );
        }
}

export default Form;