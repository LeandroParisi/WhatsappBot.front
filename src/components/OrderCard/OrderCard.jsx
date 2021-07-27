import React, { useState } from 'react'
import {
  arrowDown, arrowUp, price, arrowRight, arrowLeft,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'interfaces/orders/orderStatus'
import deliveryIcon from './lib'
import styles from './OrderCard.module.scss'

const OrderCard = ({
  order: {
    orderNumber, totalPrice, deliveryType, id,
  },
  column,
  updateOrder,
}) => {
  const [isOpened, setIsOpened] = useState(false)

  const isMiddleColumn = column !== 0

  const openCard = () => {
    setIsOpened(!isOpened)
  }

  const changeOrderStatus = async (type) => {
    if (type === 'back') {
      await updateOrder(id, column, type)
      return
    }
    await updateOrder(id, column)
  }

  return (
    <article className={classNames(styles.orderCard, styles[orderStatus[column]])}>
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

      <section className={classNames(styles.cardBody, {
        [styles.opened]: isOpened,
      })}
      >
        teste
      </section>

      <footer classNames={styles.cardFooter}>
        <Icon icon={price} className={styles.mainIcon} size="20px" />
        <span>{totalPrice}</span>
        <div className={styles.iconContainer}>
          {isMiddleColumn && (
          <Icon
            icon={arrowLeft}
            className={classNames(styles.arrowIcon, styles.firstIcon)}
            size="15px"
            onClick={() => changeOrderStatus('back')}
          />
          )}
          <Icon
            icon={arrowRight}
            className={styles.arrowIcon}
            size="15px"
            onClick={() => changeOrderStatus('forth')}
          />
        </div>
      </footer>
    </article>
  )
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    orderNumber: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryType: PropTypes.string.isRequired,
  }).isRequired,
  column: PropTypes.number.isRequired,
  updateOrder: PropTypes.func.isRequired,
}

export default OrderCard
