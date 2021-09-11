import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useProducts, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'interfaces/entities'
import { MainPageFilter } from 'components'

const ProductsContainer = () => {
  const {
    getFilters,
    saveFilters,
    updateBranch,
    activateBranch,
    deactivateBranch,
    getAdaptedProducts,
    getAdaptedEditProducts,
    getDefaultEntity,
    createBranch,
    deleteBranch,
  } = useProducts()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedProducts()

  const adaptedEditEntities = getAdaptedEditProducts()

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
            // createEntity={defaultCreateEntity}
            type={entitiesTypes.products}
            // editRequest={updateBranch}
            // createRequest={createBranch}
            // activate={activateBranch}
            // deactivate={deactivateBranch}
          />
        )}
    </>
  )
}

export default ProductsContainer
