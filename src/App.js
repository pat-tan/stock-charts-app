import React, { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './pages/Home'
// import Stock from './Stock';
import UserContext from './contexts/UserContext.js'
import './App.css';

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [user, setUser] = useState('')
  // const [stockTicker, setStockTicker] = useState('')
  // const [stockXValues, setStockXValues] = useState([])
  // const [stockYValues, setStockYValues] = useState([])
  // const [stockColor, setStockColor] = useState('')


  const handleChange = (e) => {
    // console.log('handling change', e.target.value)
    e.target.value = ("" + e.target.value).toUpperCase();
    setUserInput(e.target.value)
  }


  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Nav handleChange={handleChange} />
        <Routes>
          <Route path='/' element={<Home userInput={userInput} />} />
          {/* <Route path='stock' element={<Stock stockData= {stockData} />} /> */}
        </Routes>
      </UserContext.Provider>

    </div>
  );

}


export default App;
