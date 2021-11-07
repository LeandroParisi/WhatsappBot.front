import React from 'react'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import classNames from 'classnames'
import styles from './DateField.module.scss'

registerLocale('pt', pt)

const DateField = ({
  formValues, updateState, errors, subSection, isDisabled,
}) => {
  const {
    key, sectionName,
  } = subSection

  const value = formValues[key]

  return (
    <div className={classNames(styles.container, { [styles.disabled]: isDisabled })}>
      <p>{sectionName}</p>
      <DatePicker
        selected={value ? new Date(value) : value}
        onChange={(date) => updateState(key, date)}
        locale="pt"
        placeholderText="Sem data limite"
        isClearable
        disabled={isDisabled}
        // dateFormat="dd/MM/yyyy"
      />
    </div>
  )
}

DateField.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
  }).isRequired,
  isDisabled: PropTypes.bool,
}

DateField.defaultProps = {
  isDisabled: false,
}

export default DateField
