import React from './node_modules/react';

class Paw_Form extends React.Component {
  constructor(props){
    super(props);
    this.state =
    {
        value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}
    render() { 
        return ( 
            <form>
            <h1> {this.state.pawName}</h1>
            <p>Name:</p>
            <input
              type="text"
            />
          </form>
         );
    }
}
 
export default Paw_Form;