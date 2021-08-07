import React from 'react'
import { DashboardProvider } from 'store'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { DashboardContainer, DashboardHeader } from 'containers'

const Dashboard = () => (
  <BaseLayout>
    <DashboardProvider>
      <DashboardHeader />
      <DashboardContainer />
    </DashboardProvider>
  </BaseLayout>
)

export default Dashboard
