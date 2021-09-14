import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'
import styles from './InputField.module.scss'

const InputField = ({
  formValues, updateState, errors, subSection,
}) => {
  const {
    key, sectionName,
  } = subSection
  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <Input
        value={formValues[key]}
        onChange={(e) => updateState(key, e.target.value)}
        error={errors[key] || {}}
      />
    </div>
  )
}

InputField.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
  }).isRequired,
}

export default InputField
