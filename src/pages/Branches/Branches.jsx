import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { BranchesProvider } from 'store'
import { BranchesContainer } from 'containers'

const Branches = () => (
  <BaseLayout>
    <BranchesProvider>
      <BranchesContainer />
    </BranchesProvider>
  </BaseLayout>
)

export default Branches
