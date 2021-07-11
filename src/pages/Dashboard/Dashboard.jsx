import React, { useEffect } from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { useDashboard } from 'store'
import { DashboardHeader } from 'containers'

const Dashboard = () => {
  const { fetchUserBranches, $dashboard } = useDashboard()

  const { branches } = $dashboard

  useEffect(() => {
    fetchUserBranches()
  }, [])

  return (
    <BaseLayout>
      <main>
        <DashboardHeader />
        Dashboard
      </main>
    </BaseLayout>
  )
}

export default Dashboard
