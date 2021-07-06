import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Input.module.scss'

const Input = ({
  type, placeholder, value, onBlur, onChange, error: { error, errorMessage }, onFocus,
}) => (
  <div className={styles.inputContainer}>
    <input
      type={type}
      className={classNames({ [styles.error]: error })}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
    {error && <p className={styles.errorText}>{errorMessage}</p>}
  </div>

)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }),
}

Input.defaultProps = {
  placeholder: '',
  onBlur: null,
  onChange: null,
  error: {},
}

export default Input
