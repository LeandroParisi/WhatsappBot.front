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

const OrderBody = ({
  order,
  isOpened,
}) => {
  const { totalPrice, deliveryType, customer } = order

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
        <Icon
          icon={price}
          className={styles.deliveryPrice}
          size="15px"
          color="rgba(90, 90, 90)"
        />
      </div>
    </section>
  )
}

OrderBody.propTypes = {
  order: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
}

export default OrderBody
