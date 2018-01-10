'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./assets/confirm_button.scss');

var _iconDoubleArrow = require('../../images/icon-double-arrow.svg');

var _iconDoubleArrow2 = _interopRequireDefault(_iconDoubleArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmButton = function ConfirmButton(_ref) {
  var enabled = _ref.enabled,
      disabled = _ref.disabled,
      title = _ref.title,
      onClickEvent = _ref.onClickEvent,
      submitValue = _ref.submitValue,
      showSpinner = _ref.showSpinner,
      className = _ref.className,
      hideArrow = _ref.hideArrow;

  if (disabled) {
    enabled = false;
  }
  var buttonStyle = (enabled ? 'btn-primary' : 'disabled') + ' ' + (className || 'btn btn-continue');
  var buttonSubmit = function buttonSubmit() {
    if (onClickEvent && enabled) {
      if (submitValue) {
        return onClickEvent(submitValue);
      } else {
        return onClickEvent();
      }
    }
  };
  var content = function content() {
    return _react2.default.createElement(
      'button',
      { type: 'button', className: buttonStyle, onClick: function onClick() {
          return buttonSubmit();
        } },
      _react2.default.createElement(
        'div',
        { style: { textTransform: 'uppercase', fontSize: '14px' } },
        title,
        hideArrow ? '' : _react2.default.createElement('img', { style: { margin: '0px 0px 4px 10px' }, src: _iconDoubleArrow2.default, alt: 'double-arrow' })
      )
    );
  };
  var loadingContent = function loadingContent() {
    return _react2.default.createElement(
      'button',
      { type: 'button', className: buttonStyle },
      _react2.default.createElement(
        'div',
        { style: { textTransform: 'uppercase', fontSize: '14px' } },
        title,
        hideArrow ? '' : _react2.default.createElement('img', { style: { margin: '0px 0px 4px 10px' }, src: _iconDoubleArrow2.default, alt: 'double-arrow' })
      )
    );
  };
  var buttonContent = content();
  if (showSpinner) {
    buttonContent = loadingContent();
  }
  return buttonContent;
};

ConfirmButton.propTypes = {
  enabled: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  onClickEvent: _propTypes2.default.func.isRequired,
  submitValue: _propTypes2.default.any,
  showSpinner: _propTypes2.default.bool
};

ConfirmButton.defaultProps = {
  enabled: true,
  title: 'Submit',
  showSpinner: false
};

exports.default = ConfirmButton;