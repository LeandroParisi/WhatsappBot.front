import React, { useEffect } from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { useUser } from 'store'

const Dashboard = () => {
  const { getUserBranches } = useUser()
  useEffect(() => {
    getUserBranches()
  }, [])
  const teste = 1
  return (

    <BaseLayout>
      <main>
        Dashboard
      </main>
    </BaseLayout>
  )
}

export default Dashboard
