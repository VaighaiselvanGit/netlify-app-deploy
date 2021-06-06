import { React , Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './counter';

function EventHandling (){ 
    const array=[5,6,7]
    const [state,setState] = useState(0);
    function onclick(name) { 
        alert("Name : "+name)
     }
     function setIncrement() { 
        setState(state+1)
      }
      
     return (
         <div>
             <h1 className="text-center p lead badge badge-primary m2">{state}</h1>
              <button style={{margin:"25px"}} className="btn btn-danger" onClick={()=>{setIncrement()}}>Increment</button>
              <button style={{margin:"25px"}} className="btn btn-success" onClick={()=>{setState(0)}}>Reset</button>
              {/* passing arguments to react functions */}
              {/* <Counter array1={array} /> */}
              <button className='btn btn-dark' onClick={()=>{ 
                  onclick("Vaighai");
               }}>Simple</button>
               <br />
               <br />
        <h2>Part-2</h2>

         </div>
     )
 }
 export default EventHandling;