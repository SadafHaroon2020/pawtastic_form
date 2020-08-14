import React from 'react';

class Paw_Form extends React.Component {

    render() { 
        return ( 
            <form>
            <label> Name :<br/>  
            <input style={{marginTop:'10px'}} type="text" value='name' onChange='' placeholder="Pet's Name"/>
            </label>
            <br/><br/>
            <label>Breed :<br/>
            <input style={{marginTop:'10px'}} type="text" placeholder="Pet's Breed" value='' onChange=''/>
            </label>
          </form>
         );
    }
}
 
export default Paw_Form;