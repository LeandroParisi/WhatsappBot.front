import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'interfaces/orders/orderStatus'
import { OrderHeader, OrderFooter, OrderBody } from './subComponents'
import styles from './OrderCard.module.scss'

const OrderCard = ({
  order,
  column,
  updateOrder,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const { id } = order

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
        order={order}
      />

      <OrderBody
        isOpened={isOpened}
        order={order}
      />

      <OrderFooter
        column={column}
        order={order}
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
