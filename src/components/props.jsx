import React,{Component} from 'react';
class Props extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:this.props.Obj,
            date:new Date().getDate(),
            msg:"Hello"
         }
    }

    completeTutorial = ()=>{
        console.log("Hello world");
    }
    
    render() {
        this.state.msg="Vaighai";
        console.log(this.state.msg); 
        // console.log(this.state.counter.Avatar);
        return (
            // <h1>Welcome, {this.props.name} hey </h1>
            // states
            <React.Fragment>
               <h1>Today date is about: { this.state.date }</h1>
               {this.props.children}
               {/* <p onMouseEnter={this.completeTutorial}>Hello world</p> */}
            </React.Fragment>
                    );
    }
}
 
export default Props;