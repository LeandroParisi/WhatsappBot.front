import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useCoupons, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'components'

const CouponsContainer = () => {
  const {
    getFilters,
    saveFilters,
    getAdaptedEntities,
    getAdaptedEditEntities,
    destroy,
    activate,
    deactivate,
    // updatePromotion,
    // deletePromotion,
    // activatePromotion,
    // deactivatePromotion,
    // updateProduct,
    // activateBranch,
    // deactivateBranch,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    // getDefaultEntity,
    // createPromotion,
    // deleteBranch,
  } = useCoupons()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedEntities()

  const adaptedEditEntities = getAdaptedEditEntities()

  // const defaultCreateEntity = getDefaultEntity()

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

            // createEntity={defaultCreateEntity}
            // editRequest={updatePromotion}
            // createRequest={createPromotion}

          />
        )}
    </>
  )
}

export default CouponsContainer
