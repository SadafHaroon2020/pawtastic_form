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
            <label style={{marginLeft:'20px'}} >Birthday :
            <input type="text" placeholder="MM/DD/YY" value='' onChange=''/>
            <br></br>
            </label>
            <br/>
             Gender :
            <label for= "toggle" class= "switch">  
            <input type="checkbox" id="toggle" class="checkbox"/>
            </label>
            <br/>
            Spayed or Neutered :
            <label for= "toggle" class= "switch2">
            <br/>
            <input type="checkbox" id="toggle" class="checkbox"/>
            </label>
            <br/>
                 <label>
                     <br/>
                  Weight  : 
                  <input type="text" placeholder="lbs" value='' onChange=''/>
                 </label>
          </form>
         );
    }
}
 
export default Paw_Form;