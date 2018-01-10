import React from 'react';
import PropTypes from 'prop-types';
// import './assets/confirm_button.scss';
import DoubleArrow from './assets/icon-double-arrow.svg';

const ConfirmButton = ({enabled, disabled, title, onClickEvent, submitValue, showSpinner, className, hideArrow}) => {
  if (disabled) {
    enabled = false;
  }
  let buttonStyle = `${enabled ? 'btn-primary' : 'disabled'} ${className || 'btn btn-continue'}`;
  const buttonSubmit = () => {
    if (onClickEvent && enabled) {
      if (submitValue) {
        return onClickEvent(submitValue);
      } else {
        return onClickEvent();
      }
    }
  };
  const content = () => {
    return (
      <button type='button' className={buttonStyle} onClick={() => buttonSubmit()} >
        <div style={{textTransform: 'uppercase', fontSize: '14px'}}>{title}{hideArrow ? '' : <img style={{margin: '0px 0px 4px 10px'}} src={DoubleArrow} alt='double-arrow' />}</div>
      </button>
    );
  };
  const loadingContent = () => {
    return (
      <button type='button' className={buttonStyle} >
        <div style={{textTransform: 'uppercase', fontSize: '14px'}}>{title}{hideArrow ? '' : <img style={{margin: '0px 0px 4px 10px'}} src={DoubleArrow} alt='double-arrow' />}</div>
      </button>
    );
  };
  let buttonContent = content();
  if (showSpinner) {
    buttonContent = loadingContent();
  }
  return buttonContent;
};

ConfirmButton.propTypes = {
  enabled: PropTypes.bool,
  title: PropTypes.string,
  onClickEvent: PropTypes.func.isRequired,
  submitValue: PropTypes.any,
  showSpinner: PropTypes.bool
};

ConfirmButton.defaultProps = {
  enabled: true,
  title: 'Submit',
  showSpinner: false
};

export default ConfirmButton;
