import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { BranchesProvider } from 'adminDashboard/store'
import { BranchesContainer } from 'adminDashboard/containers'

const Branches = () => (
  <BaseLayout>
    <BranchesProvider>
      <BranchesContainer />
    </BranchesProvider>
  </BaseLayout>
)

export default Branches
