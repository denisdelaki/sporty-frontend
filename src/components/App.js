import React from 'react';
import '../App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
function App() {

    return (
      <>
        <Login />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );

   
}

export default App;
