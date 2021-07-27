import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick, children, disabled, type,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}

  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
  type: 'button',
}

export default Button
