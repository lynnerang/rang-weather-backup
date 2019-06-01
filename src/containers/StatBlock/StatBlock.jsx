import React, { Component } from 'react';

class StatBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, title } = this.props;
    const { stat1, stat2, unit, label1, label2 } = this.props.stats || '';
    const unit2 = stat2 ? unit : '';

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
          
        </div>
      </article>
    );
  }
}

export default StatBlock;