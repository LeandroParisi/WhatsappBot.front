import React from 'react'
import { customFieldTypes } from 'libs/inputTypes'
import PropTypes from 'prop-types'
import { deliveryFeeTranslations } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { Select } from 'components'
import styles from './CustomField.module.scss'

const { DELIVERY_FEES } = customFieldTypes

const CustomField = ({ subSection, updateState, formValues }) => {
  const {
    key, sectionName, customField, value, options,
  } = subSection

  const customFieldFactory = () => {
    console.log({ formValues })

    if (customField === DELIVERY_FEES) {
      const stateField = formValues[key]
      const { fees, type } = stateField

      const setOption = (selectedOption) => {
        const updatedValues = {
          ...stateField,
          type: selectedOption,
        }
        updateState(key, updatedValues)
      }

      return (
        <div className={styles.subContainer}>
          <div className={styles.innerField}>
            <p>Tipo</p>
            <Select
              options={options}
              selected={type}
              placeholder="Tipo de entrega"
              setOption={setOption}
            />
          </div>
          <div className={styles.innerField} />
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
    options: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  value: PropTypes.oneOf(PropTypes.shape({}), PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

CustomField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default CustomField
