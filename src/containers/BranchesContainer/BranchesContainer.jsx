import React from 'react'
import { useRoot, useBranches } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'components/EntitiesContainer/EntitiesInterface'

const BranchesContainer = () => {
  const { getUserBranches } = useRoot()

  const branches = getUserBranches()

  console.log(branches)

  return (
    <EntitiesContainer entities={branches} type={entitiesTypes.branches} />
  )
}

export default BranchesContainer
