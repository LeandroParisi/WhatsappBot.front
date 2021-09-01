import React from 'react'
import TimePicker from 'react-time-picker'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './TimePicker.module.scss'

const CustomTimePicker = ({
  value, onChange, label, className, containerClass,
}) => {
  const closeIcon = () => <Icon icon={getIcon('CLOSE')} size="15px" tooltipText="Zerar" />
  return (
    <div className={classNames(styles.container, containerClass)}>
      {label && <p>{label}</p>}
      <TimePicker
        value={value}
        onChange={onChange}
        disableClock
        className={[styles.timePicker, className]}
        clearIcon={closeIcon()}
      />
    </div>
  )
}

CustomTimePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  containerClass: PropTypes.string,
}

CustomTimePicker.defaultProps = {
  value: '',
  onChange: null,
  label: '',
  className: '',
  containerClass: '',
}

export default CustomTimePicker
