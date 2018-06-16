import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';
import openSocket from 'socket.io-client';
import * as Actions from '../actions';


class App extends Component {
  componentDidMount() {
       
    this.props.fetchCommodities({ socket: this.socket }); 
  }
  render() {
    console.log("this props", this.props);
    if (this.props.isFetching) {
      return <ReactLoading type="bars" />;
    } 
    return (
      
      <ul className="list-unstyle">
        {
          this.props.commodities.map(
          (dataset, index) => <li key={index}>
            <span>Time</span>: <span>{dataset.dt_txt}</span>
            <br />
            <span>Temperature</span>: <span>{dataset.main.temp}</span>
            <br />
            <span>Min Temperature</span>: <span>{dataset.main.temp_min}</span>
            <br />
            <span>Max Temperature</span>: <span>{dataset.main.temp_max}</span>
            <br />
            <span>Pressure</span>: <span>{dataset.main.pressure}</span>
          </li>
        )}
        
      </ul>
    );
  }
}

export default connect(
  state => state, 
  {fetchCommodities: Actions.fetchCommodities }
)(App);
