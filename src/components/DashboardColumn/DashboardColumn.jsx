import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OrderCard from '../OrderCard/OrderCard'
import stepNames from './libs'
import styles from './DashboardColumn.module.scss'
import orderStatus from '../../interfaces/orders/orderStatus'

const DashboardColumn = ({ orders, step }) => {
  const nothing = 0

  return (
    <div className={classNames(styles.column, styles[orderStatus[step]])}>
      <h2 className={styles.columnTitle}>
        {stepNames[step]}
      </h2>
      <span className={styles.ordersCount}>
        {orders.length}
      </span>

      {orders.map((order) => (
        <OrderCard order={order} />
      ))}
    </div>
  )
}

DashboardColumn.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

export default DashboardColumn
