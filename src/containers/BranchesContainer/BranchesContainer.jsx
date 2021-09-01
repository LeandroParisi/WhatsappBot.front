import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useBranches, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'components/EntitiesContainer/EntitiesInterface'
import { MainPageFilter } from 'components'

const BranchesContainer = () => {
  const {
    getUserBranches, getFilters, saveFilters, updateBranch,
  } = useBranches()
  const { getIsLoading } = useRoot()
  const { filters, validationSchema } = getFilters()

  const branches = getUserBranches()

  return (
    <>
      <MainPageFilter
        filters={filters}
        validationSchema={validationSchema}
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
          />
        )}
    </>
  )
}

export default BranchesContainer
