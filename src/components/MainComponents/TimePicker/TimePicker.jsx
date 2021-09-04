import React from 'react'
import TimeInput from 'material-ui-time-picker'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getIcon } from 'assets/icons/iconsLib'
import { convertHourToDate, extractHoursFromDate } from './helpers'
import styles from './TimePicker.module.scss'

const CustomTimePicker = ({
  value, onChange, label, className, containerClass,
}) => {
  const convertedValue = convertHourToDate(value)

  return (
    <div className={classNames(styles.container, containerClass)}>
      {label && <p>{label}</p>}
      <TimeInput
        mode="24h"
        value={convertedValue}
        onChange={(time) => onChange(extractHoursFromDate(time))}
        color="red"
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
