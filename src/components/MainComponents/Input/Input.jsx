import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import globalStyles from 'assets/scss/globals.module.scss'
import styles from './Input.module.scss'

const Input = ({
  type,
  placeholder,
  value,
  onBlur,
  onChange,
  error: { error, errorMessage },
  onFocus,
  label,
  className,
  onMouseOut,
}) => (
  <div className={classNames(styles.inputContainer, className)}>
    {label && <label htmlFor={value}>{label}</label>}
    <input
      id={value}
      type={type}
      className={classNames({ [globalStyles.errorInput]: error })}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onMouseOut={onMouseOut}
    />
    {error && <p className={globalStyles.errorText}>{errorMessage}</p>}
  </div>

)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  error: {},
  type: 'text',
  className: '',
}

export default Input
