import React, { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './pages/Home'
// import Stock from './Stock';
import UserContext from './contexts/UserContext.js'
import './App.css';

const App = () => {
  const [userInput, setUserInput ] = useState('')
  const [user, setUser] = useState('')
  const [stockData, setStockData] = useState([])


  
  // // const [dataY, setDataY] = useState([])

  // const handleChange = (e) => {
  //   // console.log('handling change', e.target.value)
  //   setUserInput(e.target.value)

  // }

  useEffect( () => {
      fetchStock()

  }, [])

  const fetchStock = async () => {
      try {
          // const API_KEY = 'HGJWFG4N8AQ66ICD';
          // let StockSymbol = 'FB';
          
          const API_KEY = 'DXUHU5Z7K50G5V03';
          
          const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=${API_KEY}")
          console.log("before res")
          console.log(response.data)
          console.log(response.data['Time Series (Daily)'])
          setStockData(response.data['Time Series (Daily)'])

      } catch (error) {
          console.log(error)
      }
      
  }
  // console.log('App', user)

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='stock' element={<Stock stockData= {stockData} />} /> */}
        </Routes>
      </UserContext.Provider>

    </div>
  );

}


export default App;
