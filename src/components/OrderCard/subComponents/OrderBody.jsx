import React from 'react'
import classNames from 'classnames'
import {
  price, arrowRight, arrowLeft, checkMark,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import { deliveryTranslation } from '../lib'
import styles from '../OrderCard.module.scss'
import assembleAddress from '../../../utils/assembleAddress'

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
