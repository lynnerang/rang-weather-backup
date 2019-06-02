import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export class StatBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, title } = this.props;
    const { stat1, stat2, unit, label1, label2 } = this.props.stats || '';
    const unit2 = stat2 && typeof stat2 === 'number' ? unit : '';

    const times = this.props.data.map(metric => {
      const hr = parseInt(metric.date.split(':')[0].split('T')[1], 10);
      return `${hr}:`;
    });

    const metrics = this.props.data.map(point => {
      const result = point.stat2 ? point.stat2 : point.stat1;
      return result;
    })

    const chartData = {
      labels: times,
      datasets: [{
        maintainAspectRatio: false,
        borderColor: 'white',
        data: metrics
      }]
    }
    const options = {
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      },

      scales: {
        yAxes: [{
          ticks: {
            fontSize: 10,
            fontColor: 'rgba(0, 0, 0, 0.5)',
            color: 'rgba(255, 255, 255, 0.3)'
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.3)',
            drawBorder: false
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 10,
            fontColor: 'rgba(0, 0, 0, 0.5)',
            color: 'rgba(255, 255, 255, 0.3)'
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
        }]
      }
    };

    return (
      <article className={`StatBlock ${type}`}>
        <img className="StatBlock-bg" src={require(`../../images/${type}bg.png`)} />
        <div className="StatBlock-header">
          <img className="StatBlock-icon" src={require(`../../images/${type}icon.png`)} alt={`${type} icon`}/>
          <h2>{title}</h2>
        </div>
        <div className="StatBlock-metrics">
          <div className="metric left-metric">
            <p className="metric-number">{stat1}<span className="unit-txt">{unit}</span></p>
            <p className={`metric-label metric-label-${type}`}>{label1}</p>
          </div>
          <div className="metric right-metric">
            <p className="metric-number">{stat2}<span className="unit-txt">{unit2}</span></p>
            <p className={`metric-label metric-label-${type}`}>{label2}</p>
          </div>
        </div>
        <div className="StatBlock-graph">
          <Line data={chartData} height={60} options={options} />
        </div>
      </article>
    );
  }
}

export default StatBlock;