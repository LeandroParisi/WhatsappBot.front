import React from 'react'
import { customFieldTypes } from 'libs/inputTypes'
import PropTypes from 'prop-types'
import globalStyles from 'assets/scss/globals.module.scss'
import classNames from 'classnames'
import {
  DeliveryFeeField, OpeningHoursField, CitiesField, ProductAttributes,
} from './CustomFields'
import styles from './CustomField.module.scss'

const {
  DELIVERY_FEES, OPENING_HOURS, CITIES, PRODUCT_ATTRIBUTES,
} = customFieldTypes

const CustomField = ({
  subSection, updateState, formValues, errors,
}) => {
  const {
    sectionName, customField, key,
  } = subSection

  const { error = false, errorMessage = '' } = errors[key] || {}

  const customFieldFactory = () => {
    const customFields = {
      [DELIVERY_FEES]: <DeliveryFeeField
        subSection={subSection}
        updateState={updateState}
        formValues={formValues}
      />,
      [OPENING_HOURS]: <OpeningHoursField
        subSection={subSection}
        updateState={updateState}
        formValues={formValues}
      />,
      [CITIES]: <CitiesField
        subSection={subSection}
        updateState={updateState}
        formValues={formValues}
      />,
      [PRODUCT_ATTRIBUTES]: <ProductAttributes
        subSection={subSection}
        updateState={updateState}
        formValues={formValues}
      />,
    }

    if (customFields[customField]) {
      return customFields[customField]
    }
    throw new Error('Invalid custom field type: <CustomField>')
  }

  return (
    <div className={classNames(styles.customField, { [styles.error]: error })}>
      <p>{sectionName}</p>
      {customFieldFactory()}
      { error && <p className={globalStyles.errorText}>{errorMessage}</p>}
    </div>

  )
}

CustomField.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
}

CustomField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default CustomField
