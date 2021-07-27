import React from 'react'
import { useDashboard } from 'store'
import DashboardColumn from '../../components/DashboardColumn/DashboardColumn'
import styles from './DashboardContainer.module.scss'

const DashboardContainer = () => {
  const { getOrders } = useDashboard()
  const {
    dispatched, inProduction, placed, readyToDeliver, toDo,
  } = getOrders()

  return (
    <main className={styles.dashboardContainer}>
      <DashboardColumn orders={placed} step={1} />
      <DashboardColumn orders={toDo} step={2} />
      <DashboardColumn orders={inProduction} step={3} />
      <DashboardColumn orders={readyToDeliver} step={4} />
      <DashboardColumn orders={dispatched} step={5} />
    </main>
  )
}

export default DashboardContainer
