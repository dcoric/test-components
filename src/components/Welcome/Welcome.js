import React, { Component } from 'react';
import './Welcome.scss';
import LOGO_IMAGE from '../../images/react-logo.png';

export default class ErrorPage extends Component {
  render () {
    return (
      <div>
        <h1 className='display-1 text-center'>Welcome to</h1>
        <img
          className='logo mh-100'
          src={LOGO_IMAGE} />
      </div>
    );
  }
}
