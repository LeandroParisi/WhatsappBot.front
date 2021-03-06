import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useBranches, useRoot } from 'adminDashboard/store'
import EntitiesContainer from 'adminDashboard/components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'adminDashboard/components'

const BranchesContainer = () => {
  const {
    getFilters,
    saveFilters,
    updateBranch,
    activateBranch,
    deactivateBranch,
    getAdaptedBranches,
    getAdaptedEditBranches,
    getDefaultEntity,
    createBranch,
    deleteBranch,
  } = useBranches()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedBranches()

  const adaptedEditEntities = getAdaptedEditBranches()

  const defaultCreateEntity = getDefaultEntity()

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
            entities={adaptedEntities}
            editEntities={adaptedEditEntities}
            createEntity={defaultCreateEntity}
            type={entitiesTypes.branches}
            editRequest={updateBranch}
            createRequest={createBranch}
            activate={activateBranch}
            deactivate={deactivateBranch}
          />
        )}
    </>
  )
}

export default BranchesContainer
