import React from 'react';
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:""
        }
    }
    handleSubmit = (e)=>{ 
       e.preventDefault();
       console.log(this.state.value+" Hello");
     }
     handleChange = (e)=>{ 
         this.setState({value:e.target.value});
      }
    render() { 
        return (
    <React.Fragment>
        <form onSubmit={this.handleSubmit}>
           <label for="Name">Name</label>
           <input type="text" id="Name" value= { this.state.value } onChange={ this.handleChange }/>
           <button style={{marginLeft:"20px"}} className="btn" type="submit">submit</button>
        </form>
    </React.Fragment>

         );
    }
}
 
export default Forms;

// import React from 'react';
// class Forms extends React.Component {
// // Initialising state
// state = {
// 	name: 'GFG',
// };

// handler = (name,he="vaig") => {
// 	// Changing the state
// 	this.setState({ name: name });
//     console.log(he);
// };

// render() {
// 	return (
// 	<div>
// 		<h1>Name:{this.state.name}</h1>
// 		<h1>Click here to change the name</h1>

// 		{/* Passing the name as an argument
// 		to the handler() function */}

//       {/* We can also use the term called bind this.name_of_the_function.bind(this,"Params") */}


// 		<button onClick={ ()=>{ this.handler("Vaighai","Selvan") } }>
// 		Click Here 
// 		</button>
// 	</div>
// 	);
// }
// }

// export default Forms;
