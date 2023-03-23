import CardContainer from "./components/container/CardContainer";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import React, { useEffect } from 'react';

const App = () => {
  
  return (
    
    <div className="App">
     
      <Header/>
      <CardContainer/>
      <>&nbsp;</>
      <Modal/>
    </div>
    
  );
}

export default App;
