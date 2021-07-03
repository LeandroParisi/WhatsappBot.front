import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: null,
}

export default Button
