import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Paw_Form from './Components/Paw_Form';
import Footer from './Components/Footer'


class App extends React.Component {
  render(){
  return (
    <React.Fragment>
    <div className="wrapper">
      <div className="App">
        <div className="div1">
          <Sidebar />
        </div>
        <div className="div2">
          <Header />
          <Paw_Form />
        </div>
        <div className="div3" >
          <Footer />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
}
export default App;
