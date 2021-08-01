import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  placeholder,
  value,
  onClick,
  error: { error, errorMessage },
}) => (
  <div className={styles.inputContainer}>
    {placeholder && (
    <label htmlFor={value}>
      {placeholder}
    </label>
    )}
    <input
      id={value}
      type="checkbox"
      className={classNames({ [styles.error]: error })}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
    />
    {error && <p className={styles.errorText}>{errorMessage}</p>}
  </div>

)

Checkbox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }),
}

Checkbox.defaultProps = {
  placeholder: '',
  error: {},
}

export default Checkbox
