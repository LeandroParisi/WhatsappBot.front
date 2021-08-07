import React from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { DashboardContainer, DashboardHeader } from 'containers'

const Dashboard = () => (
  <BaseLayout>
    <DashboardHeader />
    <DashboardContainer />
  </BaseLayout>
)

export default Dashboard
