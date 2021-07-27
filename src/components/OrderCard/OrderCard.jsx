import React, { useState } from 'react'
import {
  pickUp, arrowDown, arrowUp, price,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'interfaces/orders/orderStatus'
import styles from './OrderCard.module.scss'

const OrderCard = ({ order: { orderNumber, totalPrice }, column }) => {
  const [isOpened, setIsOpened] = useState(false)

  const openCard = () => {
    setIsOpened(!isOpened)
  }

  return (
    <article className={classNames(styles.orderCard, styles[orderStatus[column]])}>
      <header className={styles.cardHeader}>
        <Icon icon={pickUp} className={styles.mainIcon} size="15px" />
        <h2>{`Pedido ${orderNumber}`}</h2>
        <Icon
          onClick={openCard}
          icon={isOpened ? arrowUp : arrowDown}
          className={styles.arrowIcon}
          size="15px"
        />
      </header>
      <section className={classNames(styles.cardBody, {
        [styles.opened]: isOpened,
      })}
      >
        teste
      </section>

      <footer classNames={styles.cardFooter}>
        <Icon icon={price} className={styles.mainIcon} size="20px" />
        <span>{totalPrice}</span>
      </footer>
    </article>
  )
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  column: PropTypes.number.isRequired,
}

export default OrderCard
