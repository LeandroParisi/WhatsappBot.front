import { MainPageFilter } from 'components'
import React from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { BranchesProvider } from 'store'
import { BranchesContainer } from 'containers'

const Branches = () => (
  <BaseLayout>
    <BranchesProvider>
      <MainPageFilter />
      <BranchesContainer />
    </BranchesProvider>
  </BaseLayout>
)

export default Branches
