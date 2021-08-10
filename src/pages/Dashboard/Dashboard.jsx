import React from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { DashboardProvider, useRoot } from 'store'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { DashboardContainer, DashboardHeader } from 'containers'

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
