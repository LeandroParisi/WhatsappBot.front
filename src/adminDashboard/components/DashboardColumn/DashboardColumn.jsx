import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'shared/interfaces/orders/orderStatus'
import OrderCard from '../OrderCard/OrderCard'
import stepNames from './libs'
import styles from './DashboardColumn.module.scss'

const DashboardColumn = ({ orders, step, updateOrder }) => {
  const nothing = 0

  return (
    <div className={styles.column}>
      <header className={classNames(styles.columnHeader, styles[orderStatus[step]])}>
        <h2 className={styles.columnTitle}>
          {stepNames[step]}
        </h2>
        <span className={styles.ordersCount}>
          {orders.length}
        </span>
      </header>

      {orders.map((order) => (
        <OrderCard order={order} column={step} updateOrder={updateOrder} />
      ))}
    </div>
  )
}

DashboardColumn.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  updateOrder: PropTypes.func.isRequired,
}

export default DashboardColumn
