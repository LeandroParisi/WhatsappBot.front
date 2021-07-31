import React, { useEffect } from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { useRoot } from 'store'
import { DashboardContainer, DashboardHeader } from 'containers'

const Dashboard = () => (
  <BaseLayout>
    <DashboardHeader />
    <DashboardContainer />
  </BaseLayout>
)

export default Dashboard
