import React,{ useState } from 'react'
import '../App.css'
function Counter(props) {
    const[state,setState] = useState(0);
    const add=parseInt(props.a) + parseInt(props.b);
    const myName="Vaighai Selvan";
    const URL = "https://picsum.photos/500";
    const value = "zero";
    const Array = ["Yellow","Red","Blue","Violet"]
    // console.log(props.array1);
    function main() { 
        setState(state+1);
       }

       
    return (
        <React.Fragment>
            <span  className={ getBadgeClass() }>{state}</span>
            <button className="btn  btn-light text-dark" onClick={main}>Increment</button>
            <button onClick={()=>{setState(0)}} className = "btn btn-success btn-sm m-2">clear</button>
            <button onClick={props.onDelete} className = "btn btn-danger btn-sm m-2">Delete</button>
            <ul style={{listStyle:"none"}}>
                { Array.map(i => <li key={i}>{i}</li>) }
            </ul>

            {/*  conditional Rendering */}
            {/* Truthy and falsy values */}
            <p>Status of an Array</p>
            { Array.length > 0 && <h4 className="mark text-center">Size of the Array is { Array.length }</h4> }
        </React.Fragment>
    )

    function getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += state === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter
