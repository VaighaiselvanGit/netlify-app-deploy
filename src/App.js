import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter.jsx';
import EventHandling from './components/EventHandling';
import Props from './components/props';
import HandlingEvents from './components/handlingEvents';
import Forms from './components/forms';
function App() {
 let counter = {
   value:[
     {id:1,value: 4},
     {id:2,value: 0},
     {id:3,value: 0},
     {id:4,value: 0}
   ]
 }
 var a=0
let Obj = {
  Avatar:"Hello kumar",
  id:1
}
function onDelete() { 
  console.log("Hello world");
}
  return (
   <div className="App">
     <Props>
       <p>This is a child prop</p>
     </Props>
     <HandlingEvents/>
     <Forms/>
   {/* <Props name="Vaighai" Obj={ Obj }/>
   <Props name="Selvan"/>
   <Props name="Saran"/> */}
      {/* <Counter a="5" b="10" id={counter.id} onDelete={onDelete}>
      </Counter>
      <EventHandling/> */}
    </div>
  );
}

export default App;
