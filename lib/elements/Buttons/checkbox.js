import React from 'react';
import PropTypes from 'prop-types';

import './assets/confirm_button.scss';

const Checkbox = ({checked, label, onClick, id, disabled}) => {
  return (
    <div className='checkbox icheck-primary gl-checkbox' onClick={onClick}>
      <input disabled={disabled} type='checkbox' id={id} checked={checked} onClick={() => { }} />
      <label htmlFor='primary'>{label}</label>
    </div>
  );
};

Checkbox.proptypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired
};

export default Checkbox;
