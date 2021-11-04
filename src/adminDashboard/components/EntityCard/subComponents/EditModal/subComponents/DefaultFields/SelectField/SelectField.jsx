import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'adminDashboard/components'
import styles from './SelectField.module.scss'

const SelectField = ({
  formValues, subSection, updateState, errors,
}) => {
  const {
    key, sectionName, options,
  } = subSection
  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <Select
        selected={formValues[key]}
        placeholder={`Selecione um ${sectionName}`}
        options={options}
        color="white"
        className={styles.selectInput}
        setOption={(value) => updateState(key, value)}
        error={errors[key] || {}}
      />
    </div>
  )
}

SelectField.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

export default SelectField
