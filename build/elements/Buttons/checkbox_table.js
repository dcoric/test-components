'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./assets/checkbox_table.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxTable = function CheckboxTable(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      onClick = _ref.onClick,
      id = _ref.id,
      disabled = _ref.disabled;

  return _react2.default.createElement(
    'div',
    { className: 'checkbox icheck-primary gl-checkbox', onClick: disabled ? function () {} : onClick },
    _react2.default.createElement('input', { disabled: disabled, type: 'checkbox', id: id, checked: checked, onClick: function onClick() {} }),
    _react2.default.createElement(
      'label',
      { htmlFor: 'primary' },
      label
    )
  );
};

CheckboxTable.proptypes = {
  checked: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.any.isRequired
};

exports.default = CheckboxTable;