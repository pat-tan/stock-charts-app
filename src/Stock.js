import React, { useEffect, useContext, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios'

const Stock = ({ stockData }) => {
    console.log("we are in stock")
    
   
}

// class Stock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }

//   fetchStock() {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = 'HGJWFG4N8AQ66ICD';
//     let StockSymbol = 'FB';
//     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (Daily)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//           }

//           // console.log(stockChartXValuesFunction);
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div>
//         <h1>Stock Market</h1>
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'red'},
//             }
//           ]}
//           layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
//         />
//       </div>
//     )
//   }
// }

export default Stock;