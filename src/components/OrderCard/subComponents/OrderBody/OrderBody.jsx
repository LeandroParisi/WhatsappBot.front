import React from 'react'
import classNames from 'classnames'
import {
  price,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import { deliveryTranslation } from '../../lib'
import styles from './OrderBody.module.scss'
import assembleAddress from '../../../../utils/assembleAddress'
import ProductSection from './ProductSection/ProductSection'
import PriceTag from '../../../MainComponents/PriceTag/PriceTag'

const OrderBody = ({
  order,
  isOpened,
}) => {
  const {
    deliveryType, customer, deliveryFee, ordersProducts,
  } = order
  console.log(ordersProducts)

  const renderAddress = () => {
    if (deliveryType === 'delivery') {
      return (
        <p>
          <strong>Entrega: </strong>
          {assembleAddress(customer)}
        </p>
      )
    }
    return (
      <p>{deliveryTranslation[deliveryType]}</p>
    )
  }

  return (
    <section className={classNames(styles.cardBody, {
      [styles.closed]: !isOpened,
    })}
    >
      <div className={styles.addressContainer}>
        <div className={styles.addressDisplay}>
          {renderAddress()}
        </div>
        <PriceTag value={deliveryFee} className={styles.priceTag} />
      </div>

      <div className={styles.productsContainer}>
        {ordersProducts.map((product) => <ProductSection product={product} />)}
      </div>
    </section>
  )
}

OrderBody.propTypes = {
  order: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
    deliveryType: PropTypes.arrayOf(PropTypes.any).isRequired,
    customer: PropTypes.shape({}).isRequired,
    deliveryFee: PropTypes.string.isRequired,
    ordersProducts: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
}

export default OrderBody
