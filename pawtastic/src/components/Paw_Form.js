import React from 'react';

class Paw_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.state = { pawName: '' };
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