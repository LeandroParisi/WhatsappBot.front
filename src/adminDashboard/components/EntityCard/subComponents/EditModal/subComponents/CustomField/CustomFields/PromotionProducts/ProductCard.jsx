import React, { useState } from 'react'
import PropTypes from 'prop-types'
import formatPrice from 'shared/utils/formatPrice'
import { Input } from 'adminDashboard/components'
import { attributesTranslation, attributes, singleAttributes } from 'shared/interfaces/products/productsInterface'
import Icon from 'assets/icons/Icon'
import { DARK } from 'libs/colors'
import { getIcon, generalIcons, groupedIcons } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import Modal from 'shared/templates/Modal/Modal'
import styles from './PromotionProducts.module.scss'
import {
  extractSelectedQuantity, isAttributeMaxedOut, findAttribute, updateProduct,
} from './helpers'

const {
  ADD,
  REMOVE,
} = generalIcons

const ProductCard = ({
  product, updateState, stateField, stateKey,
}) => {
  const [editMode, setEditMode] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const {
    temporaryId: productId, name, attributes, selectedAttributes, relationId,
  } = product

  const addAttribute = (id, type) => {
    let newAttributes = [...selectedAttributes]
    const newState = [...stateField]

    let newAttribute = {}

    if (singleAttributes.has(type)) {
      newAttributes = newAttributes.filter((attr) => attr.type !== type)
      const { name, price } = findAttribute(attributes, type, id)
      newAttribute = {
        id,
        name,
        price,
        quantity: 1,
        type,
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (newAttributes.some((attr) => attr.id === id)) {
        const attribute = newAttributes.find((attr) => attr.id === id)
        newAttributes = newAttributes.filter((attr) => attr.id !== id)
        newAttribute = {
          ...attribute,
          quantity: (attribute.quantity || 0) + 1,
        }
      } else {
        const { name, price } = findAttribute(attributes, type, id)
        newAttribute = {
          id,
          name,
          price,
          quantity: 1,
          type,
        }
      }
    }
    newAttributes.push(newAttribute)

    return updateState(stateKey, updateProduct(newState, productId, newAttributes))
  }

  const removeAttribute = (id) => {
    let newAttributes = [...selectedAttributes]
    const newState = [...stateField]

    newAttributes = newAttributes.map(
      (attr) => (
        attr.id === id ? { ...attr, quantity: attr.quantity - 1 } : attr),
    )
    return updateState(stateKey, updateProduct(newState, productId, newAttributes))
  }

  return (
    <div className={styles.productCard}>
      <h2>{name}</h2>
      <div className={styles.attributesSection}>
        {attributes.map(({ type, options }) => (
          <article className={styles.attributeSubSection}>
            <Icon
              icon={groupedIcons[type]}
              size="12px"
              className={styles.attributeIcon}
              tooltipText={attributesTranslation[type]}
              color={DARK}
            />
            <ul>
              {options.map(({
                name, min, max, id,
              }) => {
                const selectedQuantity = extractSelectedQuantity(selectedAttributes, name)

                const isMaximum = isAttributeMaxedOut(name, max, selectedAttributes)

                return (
                  <li className={styles.attribute}>
                    <span className={styles.quantity}>
                      {selectedQuantity}
                    </span>
                    <span>{name}</span>
                    <span className={styles.iconContainer}>
                      <Icon
                        icon={ADD}
                        size="10px"
                        className={styles.icon}
                        tooltipText="Adicionar"
                        onClick={() => addAttribute(id, type)}
                        isDisabled={isMaximum}
                      />
                      <Icon
                        icon={REMOVE}
                        size="10px"
                        className={styles.icon}
                        tooltipText="Remover"
                        onClick={() => removeAttribute(id)}
                        isDisabled={selectedQuantity === 0}
                      />
                    </span>

                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

ProductCard.propTypes = {

}

export default ProductCard
