import { MainPageFilter } from 'components'
import React from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { BranchesProvider } from 'store'

const Branches = () => (
  <BaseLayout>
    <BranchesProvider>
      <MainPageFilter />
      Branches
    </BranchesProvider>
  </BaseLayout>
)

export default Branches
