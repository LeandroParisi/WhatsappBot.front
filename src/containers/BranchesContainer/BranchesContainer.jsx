import React from 'react'
import { useBranches } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'components/EntitiesContainer/EntitiesInterface'
import { MainPageFilter } from 'components'

const BranchesContainer = () => {
  const { getUserBranches, getFilters } = useBranches()
  const { filters, validationSchema } = getFilters()

  const branches = getUserBranches()

  return (
    <>
      <MainPageFilter filters={filters} validationSchema={validationSchema} />
      <EntitiesContainer
        entities={branches}
        type={entitiesTypes.branches}
      />
    </>
  )
}

export default BranchesContainer
