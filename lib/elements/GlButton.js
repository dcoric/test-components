import React, { Component } from 'react';

export default class GlButton extends Component {

  render() {
    const {value} = this.props;
    return <button >{value || 'Confirm'}</button>;
  }
}
