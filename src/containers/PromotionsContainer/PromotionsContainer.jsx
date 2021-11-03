import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { usePromotions, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'components'

const PromotionsContainer = () => {
  const {
    getFilters,
    saveFilters,
    getAdaptedPromotions,
    getAdaptedEditPromotions,
    updatePromotion,
    deletePromotion,
    activatePromotion,
    deactivatePromotion,
    // updateProduct,
    // activateBranch,
    // deactivateBranch,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    getDefaultEntity,
    createPromotion,
    // deleteBranch,
  } = usePromotions()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedPromotions()

  const adaptedEditEntities = getAdaptedEditPromotions()

  const defaultCreateEntity = getDefaultEntity()

  return (
    <>
      <MainPageFilter
        filters={filters}
        // actions={Actions}
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
            type={entitiesTypes.promotions}
            editRequest={updatePromotion}
            createRequest={createPromotion}
            activate={activatePromotion}
            deactivate={deactivatePromotion}
            deleteRequest={deletePromotion}
          />
        )}
    </>
  )
}

export default PromotionsContainer
