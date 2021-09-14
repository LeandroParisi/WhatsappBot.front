import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'components'
import { createAttribute, attributesTranslation } from 'interfaces/products/productsInterface'
import customFieldStyles from '../../CustomField.module.scss'
import styles from './ProductAttributes.module.scss'

import { extractRemainingAttributeTypes } from './helpers'

const ProductAttributes = ({ updateState, formValues, subSection }) => {
  const {
    key,
  } = subSection
  const stateField = formValues[key]

  const addAttribute = ({ id }) => {
    const newAttribute = createAttribute(id)
    const newState = [...stateField]
    newState.push(newAttribute)
    updateState(key, newState)
  }

  const remainingAttributes = extractRemainingAttributeTypes(stateField)

  return (
    <div className={styles.productAttContainer}>
      <Select
        options={remainingAttributes}
        selected={{ id: 0, name: '' }}
        placeholder="Adicione attributos"
        color="white"
        setOption={addAttribute}
      />
      {stateField.map(({ options, type }) => (
        <div className={styles.attributesContainer}>
          <h2>{attributesTranslation[type] }</h2>
          <div className={styles.cardsContainer}>
            {options.map(({
              max, min, description, name, price,
            }) => (
              <article className={styles.attributeCard}>
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{max}</p>
                <p>{min}</p>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

ProductAttributes.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

ProductAttributes.defaultProps = {

}

export default ProductAttributes
