import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import orderStatus from 'shared/interfaces/orders/orderStatus'
import OrderCard from '../OrderCard/OrderCard'
import stepNames from './libs'
import styles from './DashboardColumn.module.scss'

const orderStyles = {
  1: 'placed',
  2: 'inProduction',
  3: 'dispatched',
}

const DashboardColumn = ({ orders, step, updateOrder }) => (
  <div className={styles.column}>
    <header className={classNames(styles.columnHeader, styles[orderStyles[orderStatus[step]]])}>
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

DashboardColumn.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  updateOrder: PropTypes.func.isRequired,
}

export default DashboardColumn
