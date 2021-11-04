import React from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { DashboardProvider, useRoot } from 'adminDashboard/store'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { DashboardContainer, DashboardHeader } from 'adminDashboard/containers'

const Dashboard = () => {
  const { getIsLoading } = useRoot()

  return (
    <BaseLayout>
      <DashboardProvider>
        <DashboardHeader />
        {getIsLoading()
          ? (
            <ReactLoader />
          )
          : (
            <DashboardContainer />
          )}
      </DashboardProvider>
    </BaseLayout>
  )
}

export default Dashboard
