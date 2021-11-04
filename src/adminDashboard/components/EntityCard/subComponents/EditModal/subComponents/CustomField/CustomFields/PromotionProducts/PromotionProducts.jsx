import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, TagsList } from 'adminDashboard/components'
import { createAttribute, attributesTranslation, attributeOptionInterface } from 'shared/interfaces/products/productsInterface'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import { newProductFactory, injectSelectedAttributes } from './helpers'
import customFieldStyles from '../../CustomField.module.scss'
import ProductCard from './ProductCard'
import { SelectListField } from '../../../DefaultFields'
import styles from './PromotionProducts.module.scss'

const PromotionProducts = ({
  updateState, formValues, subSection,
}) => {
  const {
    key,
    options,
  } = subSection
  const stateField = formValues[key]

  const handleSelectList = (value) => {
    const newState = [...formValues[key]]
    const newProduct = newProductFactory(options, value.id, newState.length + 1)

    newState.push(newProduct)

    updateState(key, newState)
  }

  const removeSelectListItem = (id) => {
    const newState = formValues[key].filter((option) => option.id !== id)
    updateState(key, newState)
  }

  return (
    <div className={styles.promotionsProductsContainer}>
      <Select
        selected={{ id: null, value: '' }}
        isDisabled={false}
        placeholder="Adicione Produtos"
        options={options}
        color="white"
        className={styles.selectInput}
        setOption={(value) => handleSelectList(value)}
      />
      <section className={styles.productsContainer}>
        {stateField.map((product) => (
          <ProductCard
            stateKey={key}
            updateState={updateState}
            product={injectSelectedAttributes(options, product)}
            stateField={stateField}
          />
        ))}
      </section>
    </div>
  )
}

PromotionProducts.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

PromotionProducts.defaultProps = {

}

export default PromotionProducts
