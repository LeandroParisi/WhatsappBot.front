import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick, children, disabled, type, className,
}) => (
  <button
    className={className}
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
  className: PropTypes.string,
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
  type: 'button',
  className: '',
}

export default Button
