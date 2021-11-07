import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'adminDashboard/components'
import classNames from 'classnames'
import styles from './InputField.module.scss'

const InputField = ({
  formValues, updateState, errors, subSection, type, isDisabled,
}) => {
  const {
    key, sectionName,
  } = subSection
  return (
    <div className={classNames(styles.container, { [styles.disabled]: isDisabled })}>
      <p>{sectionName}</p>
      <Input
        value={formValues[key]}
        onChange={(e) => updateState(key, e.target.value)}
        error={errors[key] || {}}
        type={type}
        isDisabled={isDisabled}
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
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

InputField.defaultProps = {
  type: 'text',
  isDisabled: false,
}

export default InputField
