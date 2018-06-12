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
    
    if (this.props.isFetching) {
      return <ReactLoading type="bars" />;
    } 
    return (
      
      <ul className="list-unstyle">
        {
          this.props.commodities.map(
          dataset => <li key={dataset.data}>{dataset.data}</li>
        )}
        
      </ul>
    );
  }
}

export default connect(
  state => state, 
  {fetchCommodities: Actions.fetchCommodities }
)(App);
