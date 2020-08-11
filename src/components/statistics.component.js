import React, { Component } from 'react';
import CanvasJSReact from '../canvas/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graph extends Component {
	constructor(props)
	{
		super(props)
		this.state={
			dataPoints:[
				//  { x: '01', y: 64 },
				//  { x: '02', y: 64 }
				{ x: new Date(new Date(Date.parse("2020-08-01")).getFullYear(), new Date(Date.parse("2020-08-01")).getMonth(), new Date(Date.parse("2020-08-01")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-02")).getFullYear(), new Date(Date.parse("2020-08-02")).getMonth(), new Date(Date.parse("2020-08-02")).getDate()), y: 28},
				{ x: new Date(new Date(Date.parse("2020-08-03")).getFullYear(), new Date(Date.parse("2020-08-03")).getMonth(), new Date(Date.parse("2020-08-03")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-04")).getFullYear(), new Date(Date.parse("2020-08-04")).getMonth(), new Date(Date.parse("2020-08-04")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-05")).getFullYear(), new Date(Date.parse("2020-08-05")).getMonth(), new Date(Date.parse("2020-08-05")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-06")).getFullYear(), new Date(Date.parse("2020-08-06")).getMonth(), new Date(Date.parse("2020-08-06")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-07")).getFullYear(), new Date(Date.parse("2020-08-07")).getMonth(), new Date(Date.parse("2020-08-07")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-08")).getFullYear(), new Date(Date.parse("2020-08-08")).getMonth(), new Date(Date.parse("2020-08-08")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-09")).getFullYear(), new Date(Date.parse("2020-08-09")).getMonth(), new Date(Date.parse("2020-08-09")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-10")).getFullYear(), new Date(Date.parse("2020-08-10")).getMonth(), new Date(Date.parse("2020-08-10")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-11")).getFullYear(), new Date(Date.parse("2020-08-11")).getMonth(), new Date(Date.parse("2020-08-11")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-12")).getFullYear(), new Date(Date.parse("2020-08-12")).getMonth(), new Date(Date.parse("2020-08-12")).getDate()), y: 28},
				{ x: new Date(new Date(Date.parse("2020-08-13")).getFullYear(), new Date(Date.parse("2020-08-13")).getMonth(), new Date(Date.parse("2020-08-13")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-14")).getFullYear(), new Date(Date.parse("2020-08-14")).getMonth(), new Date(Date.parse("2020-08-14")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-15")).getFullYear(), new Date(Date.parse("2020-08-15")).getMonth(), new Date(Date.parse("2020-08-15")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-16")).getFullYear(), new Date(Date.parse("2020-08-16")).getMonth(), new Date(Date.parse("2020-08-16")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-17")).getFullYear(), new Date(Date.parse("2020-08-17")).getMonth(), new Date(Date.parse("2020-08-17")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-18")).getFullYear(), new Date(Date.parse("2020-08-18")).getMonth(), new Date(Date.parse("2020-08-18")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-19")).getFullYear(), new Date(Date.parse("2020-08-19")).getMonth(), new Date(Date.parse("2020-08-19")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-20")).getFullYear(), new Date(Date.parse("2020-08-20")).getMonth(), new Date(Date.parse("2020-08-20")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-21")).getFullYear(), new Date(Date.parse("2020-08-21")).getMonth(), new Date(Date.parse("2020-08-21")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-22")).getFullYear(), new Date(Date.parse("2020-08-22")).getMonth(), new Date(Date.parse("2020-08-22")).getDate()), y: 28},
				{ x: new Date(new Date(Date.parse("2020-08-23")).getFullYear(), new Date(Date.parse("2020-08-23")).getMonth(), new Date(Date.parse("2020-08-23")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-24")).getFullYear(), new Date(Date.parse("2020-08-24")).getMonth(), new Date(Date.parse("2020-08-24")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-25")).getFullYear(), new Date(Date.parse("2020-08-25")).getMonth(), new Date(Date.parse("2020-08-25")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-26")).getFullYear(), new Date(Date.parse("2020-08-26")).getMonth(), new Date(Date.parse("2020-08-26")).getDate()), y: 26},
				{ x: new Date(new Date(Date.parse("2020-08-27")).getFullYear(), new Date(Date.parse("2020-08-27")).getMonth(), new Date(Date.parse("2020-08-27")).getDate()), y: 32},
				{ x: new Date(new Date(Date.parse("2020-08-28")).getFullYear(), new Date(Date.parse("2020-08-28")).getMonth(), new Date(Date.parse("2020-08-28")).getDate()), y: 36},
				{ x: new Date(new Date(Date.parse("2020-08-29")).getFullYear(), new Date(Date.parse("2020-08-29")).getMonth(), new Date(Date.parse("2020-08-29")).getDate()), y: 40},
				{ x: new Date(new Date(Date.parse("2020-08-30")).getFullYear(), new Date(Date.parse("2020-08-30")).getMonth(), new Date(Date.parse("2020-08-30")).getDate()), y: 26}

				// { x: new Date(2012, 01, 3), y: 38},
				// { x: new Date(2020,01,01), y: 64 },
				// { x: new Date('2020','01','02'), y: 64 }
				// { x: '03-01-2020', y: 59},
				// { x: '04-01-2020', y: 64 },
				// { x: '05-01-2020', y: 61 },
				// { x: '06-01-2020', y: 64 },
				// { x: '07-01-2020', y: 62 },
				// { x: '08-01-2020', y: 64 },
				// { x: '09-01-2020', y: 60 },
				// { x: '10-01-2020', y: 58 },
				// { x: '11-01-2020', y: 59 },
				// { x: '12-01-2020', y: 64 },
				// { x: '13-01-2020', y: 59},
				// { x: '14-01-2020', y: 64 },
				// { x: '15-01-2020', y: 61 },
				// { x: '16-01-2020', y: 64 },
				// { x: '17-01-2020', y: 62 },
				// { x: '18-01-2020', y: 64 },
				// { x: '19-01-2020', y: 60 },
				// { x: '20-01-2020', y: 58 },
				// { x: '21-01-2020', y: 59 },
				// { x: '22-01-2020', y: 64 },
				// { x: '23-01-2020', y: 59},
				// { x: '24-01-2020', y: 64 },
				// { x: '25-01-2020', y: 61 },
				// { x: '26-01-2020', y: 64 },
				// { x: '27-01-2020', y: 62 },
				// { x: '28-01-2020', y: 64 },
				// { x: '29-01-2020', y: 60 },
				// { x: '30-01-2020', y: 58 },
				// { x: '31-01-2020', y: 59 }
			]
		
		}
	}
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			backgroundColor:"rgb(0,0,0)",
			title:{
				text: "Sale Datewise for last month",
				fontColor:'rgb(255,255,255)'
			},
			axisY: {
				title: "Sales(in Rs)",
				fontColor:'rgb(255,255,255)',
				includeZero: false,
				labelFontColor:"rgb(255,255,255)"
			},
			axisX: {
				title: "Dates",
				gridThickness: 2,
				fontColor:'rgb(255,255,255)',
				labelFontColor:"rgb(255,255,255)"
			},
			height:1000,
			data: [{
				type: "line",
				toolTipContent: "Date {x}: {y}%",
				dataPoints: this.state.dataPoints
			}]
		}
		
		
		return (
		<div>
			<h1>React Line Chart</h1>
	<CanvasJSChart options = {options} />
     </div>
		);
	}
}

export default Graph; 


// import React from 'react'
// import { Chart } from 'react-charts'
 
// export function Graph() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//       },
//       {
//         label: 'Series 2',
//         data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//       }
//     ],
//     []
//   )
 
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'bar', position: 'bottom' },
//       { type: 'bar', position: 'left' }
//     ],
//     []
//   )
 
//   const barChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
//     <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   )
//   return barChart;
// }
// export default Graph;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { VictoryBar } from 'victory';

// const data=[
// 	{quarter: 1, earnings: 13000},
// 	{quarter: 2, earnings: 16500},
// 	{quarter: 3, earnings: 14250},
// 	{quarter: 4, earnings: 19000}
//   ]
// class Graph extends Component
// {
// 	constructor(props)
// 	{
// 		super(props)

// }
// render=()=>{
// 	return(
// 		<div>
// 			{console.log(this.state.data)}
// <VictoryBar data={data} />
// 		</div>
// 	)
// }
// }
// export default Graph;

// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import * as V from 'victory';
// import { VictoryLine, VictoryChart,VictoryTheme,Background } from 'victory'
// const data = [
// 	{quarter: 1, earnings: 13000},
// 	{quarter: 2, earnings: 16500},
// 	{quarter: 3, earnings: 14250},
// 	{quarter: 4, earnings: 19000},
// 	{quarter: 5, earnings: 13000},
// 	{quarter: 6, earnings: 16500},
// 	{quarter: 7, earnings: 14250},
// 	{quarter: 8, earnings: 19000},
// 	{quarter: 9, earnings: 13000},
// 	{quarter: 10, earnings: 16500},
// 	{quarter: 11, earnings: 14250},
// 	{quarter: 12, earnings: 19000}
//   ];
//   class Graph extends React.Component {
// 	render() {
		
// 	  return (
// 		<VictoryChart widht={800} domainPadding={20} style={{
// 			background: { fill: "white" }
// 		  }}
// 		  backgroundComponent={<Background/>} animate={{
// 			duration: 2000,
// 			onLoad: { duration: 1000 }
// 		  }}>
// 		  <VictoryLine
// 			data={data}
// 			x="quarter"
// 			y="earnings"
			
// 		  />
// 		</VictoryChart>
// 	  )
// 	}
//   }
//   export default Graph
//   ReactDOM.render(<App/>, mountNode);



