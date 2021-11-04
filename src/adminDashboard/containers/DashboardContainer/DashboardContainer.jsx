import orderStatus from 'shared/interfaces/orders/orderStatus'
import React from 'react'
import { useDashboard } from 'store'
import DashboardColumn from 'adminDashboard/components/DashboardColumn/DashboardColumn'
import styles from './DashboardContainer.module.scss'

const DashboardContainer = () => {
  const { getOrders, updateOrder } = useDashboard()

  const orders = getOrders()

  return (
    <main className={styles.dashboardContainer}>
      {orderStatus.map((status, index) => (
        <DashboardColumn orders={orders[status]} step={index} updateOrder={updateOrder} />
      ))}
    </main>
  )
}

export default DashboardContainer
