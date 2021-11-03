import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'components'
import { createAttribute, attributesTranslation, attributeOptionInterface } from 'shared/interfaces/products/productsInterface'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import { v4 as uuidv4 } from 'uuid'
import customFieldStyles from '../../CustomField.module.scss'
import AttributeCard from './AttributeCard'
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

  const addAttributeOption = (type) => {
    const oldState = [...stateField]
    const newState = oldState.map((attribute) => {
      if (attribute.type === type) {
        const newOptions = [...attribute.options]
        newOptions.push({ ...attributeOptionInterface, id: uuidv4() })
        return {
          ...attribute,
          options: newOptions,
        }
      }
      return attribute
    })
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
            {options.map((card, index) => (
              <AttributeCard
                card={card}
                updateState={updateState}
                stateField={stateField}
                index={index}
                type={type}
                stateKey={key}
              />
            ))}
            <Icon
              icon={generalIcons.ADD}
              size="15px"
              className={styles.icon}
              type="default"
              onClick={() => addAttributeOption(type)}
              tooltipText="Novo"
            />
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
