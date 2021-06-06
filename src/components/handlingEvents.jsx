import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {message,func} from './exports'
class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:1
         }
    }
    handleClickEvents = ()=> { 
        console.log("Hey!!!");
        console.log(this);
        this.setState({counter:this.state.counter+1})
        console.log(this.state.counter);
     }
    
    render() { 
        console.log("I am the counter variable ",this.state.counter)
        console.log(message);
        func()
        return ( 
        <React.Fragment>
            <button onClick={ this.handleClickEvents } className="btn">Events_demo</button>
        </React.Fragment> );
    }
}
 
export default HandlingEvents;