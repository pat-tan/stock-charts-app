import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
// import Stock from './Stock';
// const queryString = require("query-string");
import Plot from 'react-plotly.js';


const Home = ({ userInput }) => {

    // const [userInput, setUserInput] = useState('')
    // const [user, setUser] = useState('')
    // const [stockTicker, setStockTicker] = useState('')
    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])
    // const [stockColor, setStockColor] = useState('')

    // const handleChange = (e) => {
    //     console.log('handling change 2', e.target.value)
    //     setUserInput(e.target.value)
    // }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(userInput)
            fetchStock()
          }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [ userInput ])


    const fetchStock = async () => {
        try {
            // const API_KEY = 'HGJWFG4N8AQ66ICD';
            // let StockSymbol = 'FB';

            const API_KEY = 'HGJWFG4N8AQ66ICD';

            const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${userInput}&outputsize=compact&apikey=${API_KEY}`


            const response = await axios.get(URL)

            console.log(response.data)
            
            let stockChartX = [];
            let stockChartY = [];

            for (let key in response.data["Time Series (Daily)"]) {
                stockChartX.push(key);
                stockChartY.push(response.data["Time Series (Daily)"][key]["4. close"]);
            }

            setStockXValues(stockChartX)
            setStockYValues(stockChartY)

            console.log(stockXValues)

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            
            <div className="plot">
                <Plot
                    data={[
                        {
                            x: stockXValues,
                            y: stockYValues,
                            type: "scatter",
                            mode: "lines+markers",
                            // marker: { color: this.state.stockColor },
                        },
                    ]}
                    layout={{
                        height: window.innerHeight / 1.69,
                        width: window.innerWidth,
                        // title: this.state.stockTicker,
                        title: userInput,
                        paper_bgcolor: "#00000000",
                        plot_bgcolor: "#00000000",
                        displayModeBar: false,
                        autosize: true,
                    }}
                    config={{
                        displayModeBar: false,
                    }}
                />
            </div>

        </div>
    );
}

export default Home;
