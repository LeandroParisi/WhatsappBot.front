import React from 'react'
import { customFieldTypes } from 'libs/inputTypes'
import PropTypes from 'prop-types'
import { DeliveryFeeField, OpeningHoursField } from './CustomFields'
import styles from './CustomField.module.scss'

const { DELIVERY_FEES, OPENING_HOURS } = customFieldTypes

const CustomField = ({ subSection, updateState, formValues }) => {
  const {
    sectionName, customField,
  } = subSection

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

    }

    if (customFields[customField]) {
      return customFields[customField]
    }
    throw new Error('Invalid custom field type')
  }

  return (
    <>
      <p>{sectionName}</p>
      {customFieldFactory()}
    </>

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
}

CustomField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default CustomField
