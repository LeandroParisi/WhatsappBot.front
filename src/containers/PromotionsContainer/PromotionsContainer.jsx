import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { usePromotions, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'interfaces/entities'
import { MainPageFilter } from 'components'

const PromotionsContainer = () => {
  const {
    getFilters,
    saveFilters,
    Actions,
    getAdaptedPromotions,
    getAdaptedEditPromotions,
    // updateProduct,
    // activateBranch,
    // deactivateBranch,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    // getDefaultEntity,
    // createProduct,
    // deleteBranch,
  } = usePromotions()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedPromotions()

  const adaptedEditEntities = getAdaptedEditPromotions()

  // const defaultCreateEntity = getDefaultEntity()

  return (
    <>
      <MainPageFilter
        filters={filters}
        // actions={Actions}
        saveFilters={Actions.saveFilters()}
      />
      {getIsLoading()
        ? (
          <ReactLoader />
        )
        : (
          <EntitiesContainer
            entities={adaptedEntities}
            editEntities={adaptedEditEntities}
            // createEntity={defaultCreateEntity}
            type={entitiesTypes.promotions}
            // editRequest={updateProduct}
            // createRequest={createProduct}
            // activate={activateBranch}
            // deactivate={deactivateBranch}
          />
        )}
    </>
  )
}

export default PromotionsContainer
