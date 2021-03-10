import logo from './logo.svg';
import './App.css';
import AppBar from './app-bar';
import GridList from './gridlist';
import SignUp from './SignUp';
import  GblData from './Global';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  
  let response = null;

  const [IsLoginSuccessful, setIsLoginSuccessful] = useState(false);
    
  return (
    <div className="App">
      {/* <AppBar></AppBar>
      <SignUp></SignUp> */}
      <LoadComponent></LoadComponent>
     </div>
  );

  function LoadComponent() {
    //alert(GblData.loginSuccessful);
    if(IsLoginSuccessful)
      return <AppBar setLoginState={setIsLoginSuccessful} ></AppBar>
    else
      return <SignUp setLoginState={setIsLoginSuccessful} ></SignUp>;
  }
}


export default App;
