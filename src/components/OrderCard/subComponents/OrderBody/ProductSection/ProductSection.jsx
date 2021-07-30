import React from 'react'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './ProductSection.module.scss'
import { attributeIcons, categoryIcon } from '../../../lib'
import { extractAttributesTypes, getAttributeText, groupAttributesByType } from './utils'
import PriceTag from '../../../../MainComponents/PriceTag/PriceTag'

const ProductSection = ({
  product: {
    attributes,
    totalPrice,
    categoryName,
    description,
    quantity,
    ingredients,
    name,
    productId,
  },
}) => {
  const attributesByType = groupAttributesByType(attributes)
  const attributesLib = attributesByType && Object.entries(attributesByType)

  return (
    <article className={styles.productSection}>
      <header className={styles.productHeader}>
        <Icon
          icon={categoryIcon[categoryName]}
          className={styles.deliveryPriceIcon}
          size="15px"
          color="rgb(90, 90, 90)"
        />
        <h3>{`${name} x ${quantity}`}</h3>
      </header>

      {attributesLib?.length && attributesLib.map(([attribute, options]) => (
        <div className={classNames(styles.attributeContainer, styles[attribute])}>
          <Icon
            icon={attributeIcons[attribute]}
            className={classNames(styles.attributeIcon, {
              [styles.centered]: options.length > 1,
            })}
            size="15px"
            color="rgb(90, 90, 90)"
          />
          <ul className={styles.attributesList}>
            {options.map((option) => (
              <li>{getAttributeText(attribute, option) }</li>
            ))}
          </ul>
        </div>
      ))}

      <footer className={styles.productFooter}>
        <PriceTag value={totalPrice} className={styles.priceTag} />
      </footer>
    </article>
  )
}

ProductSection.propTypes = {
  product: PropTypes.shape({
    attributes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    totalPrice: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProductSection
