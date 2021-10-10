import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';

class Newdom extends Component {

myFun(){

        var container=document.getElementById("myID");
        var element=<h1>My Name is Mena</h1>
        var callback= function(){
                alert('Do You Changed it?')
        }

        ReactDOM.render (element, container, callback);
}


        render() {
                return (
                        <div>
                                <button onClick={this.myFun}>Change</button>
                                <h2 id="myID">My name is Rakib Hasan Shihab</h2>
                        </div>
                );
        }
}

export default Newdom;