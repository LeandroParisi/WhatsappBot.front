import React, { useState } from 'react'
import {
  arrowDown, arrowUp, price, arrowRight, arrowLeft,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import deliveryIcon from '../lib'
import styles from '../OrderCard.module.scss'

const OrderHeader = ({
  openCard, isOpened, deliveryType, orderNumber,
}) => (
  <header className={styles.cardHeader}>
    <Icon icon={deliveryIcon[deliveryType]} className={styles.mainIcon} size="15px" />
    <h2>{`Pedido ${orderNumber}`}</h2>
    <Icon
      onClick={openCard}
      icon={isOpened ? arrowUp : arrowDown}
      className={styles.arrowIcon}
      size="15px"
    />
  </header>
)

OrderHeader.propTypes = {
  openCard: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  deliveryType: PropTypes.string.isRequired,
  orderNumber: PropTypes.number.isRequired,
}

export default OrderHeader
