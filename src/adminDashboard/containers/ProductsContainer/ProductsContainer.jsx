import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useProducts, useRoot } from 'adminDashboard/store'
import EntitiesContainer from 'adminDashboard/components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'adminDashboard/components'

const ProductsContainer = () => {
  const {
    getFilters,
    saveFilters,
    updateProduct,
    deleteProduct,
    activateProduct,
    getAdaptedProducts,
    getAdaptedEditProducts,
    getDefaultEntity,
    createProduct,
    deactivateProduct,
  } = useProducts()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedProducts()

  const adaptedEditEntities = getAdaptedEditProducts()

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
            type={entitiesTypes.products}
            editRequest={updateProduct}
            createRequest={createProduct}
            activate={activateProduct}
            deactivate={deactivateProduct}
            deleteRequest={deleteProduct}
          />
        )}
    </>
  )
}

export default ProductsContainer
