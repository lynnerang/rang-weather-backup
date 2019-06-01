import React, { Component } from 'react';

class StatBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;

    return (
      <article className={`StatBlock ${type}`}>
        <img className="StatBlock-bg" src={require(`../../images/${type}bg.png`)} />
        <div className="StatBlock-header">
          <img className="StatBlock-icon" src={require(`../../images/${type}icon.png`)}/>
          <h2>Temperature</h2>
        </div>
        <div className="StatBlock-metrics">
          <div className="metric left-metric">
            <p className="metric-number">76.2<span className="unit-txt">°F</span></p>
            <p className={`metric-label metric-label-${type}`}>Indoor</p>
          </div>
          <div className="metric right-metric">
            <p className="metric-number">87.1<span className="unit-txt">°F</span></p>
          </div>
        </div>
      </article>
    );
  }
}

export default StatBlock;