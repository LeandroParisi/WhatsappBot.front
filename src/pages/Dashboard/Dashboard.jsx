import React, { useEffect } from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { useDashboard } from 'store'
import { DashboardContainer, DashboardHeader } from 'containers'

const Dashboard = () => {
  const { fetchUserBranches } = useDashboard()

  useEffect(() => {
    fetchUserBranches()
  }, [])

  return (
    <BaseLayout>
      <DashboardHeader />
      <DashboardContainer />
    </BaseLayout>
  )
}

export default Dashboard
