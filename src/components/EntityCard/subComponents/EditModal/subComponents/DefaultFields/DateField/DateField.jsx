import React from 'react'
import PropTypes from 'prop-types'
import styles from './DateField.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'

registerLocale('pt', pt)

const DateField = ({
  formValues, updateState, errors, subSection,
}) => {
  const {
    key, sectionName,
  } = subSection

  const value = formValues[key]

  console.log({ formValues })

  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <DatePicker
        selected={value ? new Date(formValues[key]) : value}
        onChange={(date) => updateState(key, date)}
        locale="pt"
        placeholderText="Sem data limite"
        isClearable
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
}

export default DateField
