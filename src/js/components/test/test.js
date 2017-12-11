/**
 * Core Libraries
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <h4>Additional Component</h4>
    );
  }
}

export default connect(
  state => ({ test: state.test.values })
)(Test)