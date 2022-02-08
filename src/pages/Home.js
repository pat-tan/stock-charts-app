import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
// import Stock from './Stock';
const queryString = require("query-string");
import Plot from 'react-plotly.js';


const Home = () => {

    const [userInput, setUserInput] = useState('')
    const [user, setUser] = useState('')
    const [stockTicker, setStockTicker] = useState(queryString.parse(window.location.search).name)
    const [stockData, setStockData] = useState([])
    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])
    const [stockColor, setStockColor] = useState('')




    // // const [dataY, setDataY] = useState([])

    const handleChange = (e) => {
        // console.log('handling change', e.target.value)
        setUserInput(e.target.value)

    }

    useEffect(() => {
        fetchStock()

    }, [])

    const fetchStock = async () => {
        try {
            // const API_KEY = 'HGJWFG4N8AQ66ICD';
            // let StockSymbol = 'FB';

            const API_KEY = 'DXUHU5Z7K50G5V03';

            // const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${userInput}&outputsize=compact&apikey=${API_KEY}")
            const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo")
            // const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${userInput}&outputsize=full&apikey=demo")

            // console.log("before res")
            console.log(response.data)
            // console.log(response.data['Time Series (Daily)'])
            // setStockData(response.data['Time Series (Daily)'])
            // console.log("before SD")

            let stockChartX = [];
            let stockChartY = [];

            for (let key in response.data["Time Series (Daily)"]) {
                stockChartX.push(key);
                stockChartY.push(response.data["Time Series (Daily)"][key]["1. open"]);
            }

            setStockXValues(stockChartX)
            setStockYValues(stockChartY)



        } catch (error) {
            console.log(error)
        }

    }
    console.log('App', user)
    console.log({ stockData })
    console.log({ userInput })
    console.log(stockXValues)
    console.log(stockYValues)


    return (
        <div>
            <div className="title">
                <h1>stock market!</h1>
                <form>
                    <label>
                        Ticker<br></br>
                        <input type="text" name="name" placeholder="e.g. AMZN"></input>
                    </label>
                </form>
            </div>
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
