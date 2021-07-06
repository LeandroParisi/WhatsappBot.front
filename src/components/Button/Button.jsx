import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children, disabled }) => (
  <button type="button" disabled={disabled} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
}

export default Button
