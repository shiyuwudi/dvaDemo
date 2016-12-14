/**
 * Created by Administrator on 2016/12/14.
 */

var LineChart = require("react-chartjs").Line;
import React from 'react'

const chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
};

var MyComponent = React.createClass({
  getInitialState(){
    return {
      chartData: chartData,
      chartOptions: chartOptions,
    };
  },
  rerenderChart(){
    this.setState({
      chartData: {
        ...this.state.chartData,
        datasets: [
          {
            ...this.state.chartData.datasets[0],
            data: this.state.chartData.datasets[0].data.map(d=>d + Math.random() * 10),
          },
        ]
      },
    });
  },
  render: function() {
    const { chartData, chartOptions } = this.state;
    return (
    <div>
      <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
      <button onClick={this.rerenderChart}> re-render</button>
    </div>
    );
  }
});

export default MyComponent;
