import React from 'react'
import { useBranches } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'components/EntitiesContainer/EntitiesInterface'

const BranchesContainer = () => {
  const { getUserBranches } = useBranches()

  const branches = getUserBranches()

  return (
    <EntitiesContainer entities={branches} type={entitiesTypes.branches} />
  )
}

export default BranchesContainer
