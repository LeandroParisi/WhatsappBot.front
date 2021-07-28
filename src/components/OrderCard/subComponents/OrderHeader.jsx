import React from 'react'
import {
  arrowDown, arrowUp, clock,
} from 'assets/icons/iconsLib'
import formatDate from 'utils/formatDate'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import { deliveryIcon } from '../lib'
import styles from '../OrderCard.module.scss'

const OrderHeader = ({
  order,
  openCard,
  isOpened,
}) => {
  const {
    deliveryType,
    orderNumber,
    createdAt,
  } = order

  formatDate(createdAt)
  return (
    <header className={styles.cardHeader}>
      <Icon icon={deliveryIcon[deliveryType]} className={styles.mainIcon} size="15px" />

      <h2>{`Pedido ${orderNumber}`}</h2>

      <div className={styles.right}>
        <div className={styles.hourContainer}>
          <Icon
            icon={clock}
            className={styles.clock}
            size="15px"
            color="rgba(90, 90, 90)"
          />
          <span className={styles.placeHour}>{formatDate(createdAt)}</span>
        </div>

        <Icon
          onClick={openCard}
          icon={isOpened ? arrowUp : arrowDown}
          className={styles.arrowIcon}
          size="15px"
        />
      </div>
    </header>
  )
}

OrderHeader.propTypes = {
  order: PropTypes.shape({
    deliveryType: PropTypes.string.isRequired,
    orderNumber: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  openCard: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
}

export default OrderHeader
