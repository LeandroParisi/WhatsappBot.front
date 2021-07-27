import React, { useState } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'interfaces/orders/orderStatus'
import OrderHeader from './subComponents/OrderHeader'
import OrderFooter from './subComponents/OrderFooter'
import styles from './OrderCard.module.scss'

const OrderCard = ({
  order: {
    orderNumber, totalPrice, deliveryType, id,
  },
  column,
  updateOrder,
}) => {
  const [isOpened, setIsOpened] = useState(false)

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
      <OrderHeader
        openCard={openCard}
        isOpened={isOpened}
        deliveryType={deliveryType}
        orderNumber={orderNumber}
      />

      <section className={classNames(styles.cardBody, {
        [styles.opened]: isOpened,
      })}
      >
        teste
      </section>

      <OrderFooter
        column={column}
        totalPrice={totalPrice}
        changeOrderStatus={changeOrderStatus}
      />
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
