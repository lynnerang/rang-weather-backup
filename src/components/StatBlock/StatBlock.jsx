import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export class StatBlock extends Component {
	render() {
		const { hasChart, hasNums, type, title, stats } = this.props || '';
		const { stat1, stat2, unit, label1, label2 } = hasNums ? stats || '' : '';
		const unit2 = stat2 ? unit : '';
		const chartHeight = hasNums && hasChart ? 60 : 70;
		const isShort = hasNums && hasChart ? '' : 'block-short';

		const metrics =
			hasNums && hasChart
				? this.props.data.map(i => {
						const result = i.stat2 && type !== 'wind' ? parseInt(i.stat2) : parseInt(i.stat1);
						return result;
					})
				: this.props.data;

		const chartData = {
			labels: this.props.timestamps,
			datasets: [
				{
					maintainAspectRatio: false,
					borderColor: 'white',
					data: metrics
				}
			]
		};

		const options = {
			legend: {
				display: false
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
				yAxes: [
					{
						ticks: {
							fontSize: 10,
							fontColor: 'rgba(0, 0, 0, 0.5)',
							color: 'rgba(255, 255, 255, 0.3)'
						},
						gridLines: {
							color: 'rgba(255, 255, 255, 0.3)',
							drawBorder: false
						}
					}
				],
				xAxes: [
					{
						ticks: {
							fontSize: 10,
							fontColor: 'rgba(0, 0, 0, 0.5)',
							color: 'rgba(255, 255, 255, 0.3)'
						},
						gridLines: {
							color: 'rgba(255, 255, 255, 0.3)'
						}
					}
				]
			}
		};

		const chart = hasChart ? (
			<div className="StatBlock-graph">
				<Line data={chartData} height={chartHeight} options={options} />
			</div>
		) : null;

		return (
			<article className={`StatBlock ${type} ${isShort}`}>
				<img className="StatBlock-bg" src={require(`../../images/${type}bg.png`)} alt="" />
				<div className="StatBlock-header">
					<img className="StatBlock-icon" src={require(`../../images/${type}icon.png`)} alt={`${type} icon`} />
					<h3>{title}</h3>
				</div>
				<div className="StatBlock-metrics">
					<div className="metric left-metric">
						<p className="metric-number">
							{stat1}
							<span className="unit-txt">{unit}</span>
						</p>
						<p className={`metric-label metric-label-${type}`}>{label1}</p>
					</div>
					<div className="metric right-metric">
						<p className="metric-number">
							{stat2}
							<span className="unit-txt">{unit2}</span>
						</p>
						<p className={`metric-label metric-label-${type}`}>{label2}</p>
					</div>
				</div>
				{chart}
			</article>
		);
	}
}

StatBlock.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
	stats: PropTypes.object,
	data: PropTypes.array,
	timestamps: PropTypes.array,
	hasChart: PropTypes.bool,
	hasNums: PropTypes.bool
};

export default StatBlock;
