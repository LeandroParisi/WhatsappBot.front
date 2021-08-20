import React from 'react'
import { customFieldTypes } from 'libs/inputTypes'
import PropTypes from 'prop-types'
import { deliveryFeeTranslations } from 'interfaces/deliveryFees/deliveryFeeTypes'

const { DELIVERY_FEES } = customFieldTypes

const CustomField = ({ subSection, updateState, formValues }) => {
  console.log(subSection)
  const {
    key, sectionName, customField, value,
  } = subSection

  const customFieldFactory = () => {
    if (customField === DELIVERY_FEES) {
      const { fees, type } = value
      return (
        <div>
          <p>{deliveryFeeTranslations[type]}</p>
          {key}
        </div>
      )
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
  }).isRequired,
  value: PropTypes.oneOf(PropTypes.shape({}), PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

export default CustomField
