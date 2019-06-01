import React, { Component } from 'react';
import { darkskyApi } from '../../api/utilities';

class Forecast extends Component {
  componentDidMount() {
    fetch(`https://api.darksky.net/forecast/${darkskyApi}/40.0114669,-105.0940768`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Forecast;