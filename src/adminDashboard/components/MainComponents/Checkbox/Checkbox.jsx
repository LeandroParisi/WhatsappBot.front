import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  placeholder,
  id,
  onClick,
  error: { error, errorMessage },
  checked,
  className,
  disabled,
}) => (
  <div className={classNames(styles.inputContainer, className)}>
    {placeholder && (
      <label htmlFor={id} className={classNames({ [styles.disabled]: disabled })}>
        {placeholder}
      </label>
    )}
    <input
      id={id}
      type="checkbox"
      className={classNames({ [styles.error]: error })}
      placeholder={placeholder}
      checked={checked}
      onClick={onClick}
      disabled={disabled}
    />
    {error && <p className={styles.errorText}>{errorMessage}</p>}
  </div>
)

Checkbox.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  placeholder: '',
  error: {},
  className: '',
  checked: false,
  disabled: false,
}

export default Checkbox
