import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} />
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
}

export default Input
