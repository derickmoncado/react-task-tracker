import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
      >
        {text}
      </button>
  );
}

// having default props
Button.defaultProps = {
  color: 'steelblue',
}

// having prop 'types'
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
export default Button;
