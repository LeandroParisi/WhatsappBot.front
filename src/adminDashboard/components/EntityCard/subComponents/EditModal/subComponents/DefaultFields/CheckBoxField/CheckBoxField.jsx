import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'adminDashboard/components'
import classNames from 'classnames'
import styles from './CheckBoxField.module.scss'

const CheckBoxField = ({
  formValues, updateState, errors, subSection, type, isDisabled,
}) => {
  const {
    key, sectionName,
  } = subSection
  return (
    <div className={classNames(styles.container, { [styles.disabled]: isDisabled })}>
      <p>{sectionName}</p>

      <Checkbox
        checked={formValues[key]}
        onClick={() => updateState(key, !formValues[key])}
        disabled={isDisabled}
      />

    </div>
  )
}

CheckBoxField.propTypes = {
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

CheckBoxField.defaultProps = {
  type: 'text',
  isDisabled: false,
}

export default CheckBoxField
