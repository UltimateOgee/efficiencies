import React, { useEffect } from "react";
import Chart from "chart.js/auto";

// https://www.chartjs.org/docs/latest/
// https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
export default function BarChart() {
  const labels = ['5-Out', 'Horns', '4-Out', 'Pick&Roll', 'Iso'];
  const data = {
    labels: labels,
    datasets: [{
      label: '2s',
      data: [10, 8, 7, 2, 1],
      backgroundColor: [
        'rgba(201, 203, 207, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      // scales: {
      //   y: {
      //     beginAtZero: true
      //   }
      // }
    },
  };
  
  useEffect(() => {
    var ctx = document.getElementById('barChart');
    const chart = new Chart(ctx, config);
  });

  return (
    <>
      <div>
          <canvas id="barChart" />
      </div>
    </>
  );
}