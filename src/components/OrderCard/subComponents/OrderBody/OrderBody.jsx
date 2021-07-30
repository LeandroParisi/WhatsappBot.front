import React from 'react'
import classNames from 'classnames'
import {
  user, phone,
} from 'assets/icons/iconsLib'
import assembleUserName from 'utils/assembleUserName'
import assemblePhoneNumber from 'utils/assemblePhoneNumber'
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
        <PriceTag value={deliveryFee || '-'} className={styles.priceTag} />
      </div>

      <div className={styles.productsContainer}>
        {ordersProducts.map((product) => <ProductSection product={product} />)}
      </div>

      <div className={styles.customerSection}>
        <div className={styles.userHeader}>
          <Icon
            icon={user}
            size="25px"
            color="rgba(90, 90, 90)"
          />
          <p className={styles.userName}>{assembleUserName(customer)}</p>
        </div>

        <div className={styles.userInfo}>
          <Icon
            icon={phone}
            size="15px"
            color="rgba(90, 90, 90)"
          />
          <p className={styles.userPhone}>{assemblePhoneNumber(customer)}</p>

        </div>
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
