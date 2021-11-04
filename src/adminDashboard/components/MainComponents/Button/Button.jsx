/* eslint-disable react/button-has-type */
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({
  onClick, children, disabled, type, className, styleType,
}) => (
  <button
    className={classNames(className, { [styles[styleType]]: styleType })}
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
  styleType: PropTypes.oneOf(['main', 'white', '']),
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
  type: 'button',
  className: '',
  styleType: '',
}

export default Button
