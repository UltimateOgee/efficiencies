import React, { useEffect } from "react";
import Chart from "chart.js/auto";

/**
 * Props object definition
 * @typedef {Object} Props
 * @property {string} id - ID for the bar chart
 * @property {string[]} labels - Labels for each bar
 * @property {string} title - Title for the bar chart
 * @property {number[]} data - Data for each bar
 * @property {string} color - color of the bars for the bar chart, in the for of 'rgb(r,g,b)'
 */


/**
 * Creates a bar chart using the data passed in through props
 * @param {Props} props 
 */
export default function BarChart({id, labels = [], title = '', data = [], color = 'rgb(201, 203, 207)'}) {
  // https://www.chartjs.org/docs/latest/
  // https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
  
  const chartData = {
    labels: labels,
    datasets: [{
      label: title,
      data: data,
      backgroundColor: data.map(() => color)
      // backgroundColor: [
      //   'rgba(201, 203, 207, 0.2)',
      //   'rgba(201, 203, 207, 0.2)',
      //   'rgba(201, 203, 207, 0.2)',
      //   'rgba(201, 203, 207, 0.2)',
      //   'rgba(201, 203, 207, 0.2)'
      // ],
      // borderColor: [
      //   'rgb(201, 203, 207)',
      //   'rgb(201, 203, 207)',
      //   'rgb(201, 203, 207)',
      //   'rgb(201, 203, 207)',
      //   'rgb(201, 203, 207)'
      // ],
      // borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: chartData,
    options: {
      // scales: {
      //   y: {
      //     beginAtZero: true
      //   }
      // }
    },
  };
  
  useEffect(() => {
    let ctx = document.getElementById(id);
    const chart = new Chart(ctx, config);
    let div = document.getElementById(id + 'Wrapper');
    div.style.width = '500px'
    div.style.height = '300px'

    return function cleanup () {
      chart.destroy();
    }
  });

  return (
    <>
      <div id={id + 'Wrapper'}>
          <canvas id={id} />
      </div>
    </>
  );
}