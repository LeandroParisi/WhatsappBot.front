import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useCoupons, useRoot } from 'adminDashboard/store'
import EntitiesContainer from 'adminDashboard/components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'adminDashboard/components'

const CouponsContainer = () => {
  const {
    getFilters,
    saveFilters,
    getAdaptedEntities,
    getAdaptedEditEntities,
    destroy,
    activate,
    deactivate,
    update,
    getDefaultEntity,
    create,
  } = useCoupons()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedEntities()

  const adaptedEditEntities = getAdaptedEditEntities()

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
            type={entitiesTypes.coupons}
            activate={activate}
            deactivate={deactivate}
            deleteRequest={destroy}
            editRequest={update}
            createEntity={defaultCreateEntity}
            createRequest={create}
          />
        )}
    </>
  )
}

export default CouponsContainer
