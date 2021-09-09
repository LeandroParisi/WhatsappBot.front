import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useBranches, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes, entityAdapter } from 'components/EntitiesContainer/EntitiesInterface'
import { MainPageFilter } from 'components'

const BranchesContainer = () => {
  const {
    getUserBranches, getFilters, saveFilters, updateBranch, activateBranch, deactivateBranch,
  } = useBranches()
  const { getIsLoading } = useRoot()
  const filters = getFilters()

  const branches = getUserBranches()

  const adaptedEntity = entityAdapter(branches, entitiesTypes.branches)

  return (
    <>
      <MainPageFilter
        filters={filters}
        saveFilters={saveFilters}
      />
      {getIsLoading()
        ? (
          <ReactLoader />
        )
        : (
          <EntitiesContainer
            entities={branches}
            type={entitiesTypes.branches}
            editRequest={updateBranch}
            activate={activateBranch}
            deactivate={deactivateBranch}
          />
        )}
    </>
  )
}

export default BranchesContainer
