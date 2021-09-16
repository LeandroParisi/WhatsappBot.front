import React from 'react'
import {
  generalIcons,
  deliveryIcons,
} from 'assets/icons/iconsLib'
import { extractDateHour } from 'utils/formatDate'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'

import styles from './OrderHeader.module.scss'

const {
  ARROW_DOWN,
  ARROW_UP,
  CLOCK,
} = generalIcons

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

  return (
    <header className={styles.cardHeader}>
      <Icon icon={deliveryIcons[deliveryType]} className={styles.mainIcon} size="15px" />

      <h2>{`Pedido ${orderNumber}`}</h2>

      <div className={styles.right}>
        <div className={styles.hourContainer}>
          <Icon
            icon={CLOCK}
            className={styles.clock}
            size="15px"
            color="rgba(90, 90, 90)"
          />
          <span className={styles.placeHour}>{extractDateHour(createdAt)}</span>
        </div>

        <Icon
          onClick={openCard}
          icon={isOpened ? ARROW_UP : ARROW_DOWN}
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
