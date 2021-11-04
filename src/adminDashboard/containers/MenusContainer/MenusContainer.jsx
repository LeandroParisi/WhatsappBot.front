import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useMenus, useRoot } from 'adminDashboard/store'
import { entitiesTypes } from 'shared/interfaces/entities'
import EntitiesContainer from 'adminDashboard/components/EntitiesContainer/EntitiesContainer'
import { MainPageFilter } from 'adminDashboard/components'

const MenusContainer = () => {
  const {
    activateMenu,
    deactivateMenu,
    getAdaptedMenus,
    getAdaptedEditMenus,
    getFilters,
    saveFilters,
    updateMenu,
    getDefaultEntity,
    deleteMenu,
    createMenu,
  } = useMenus()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedMenus()

  const adaptedEditEntities = getAdaptedEditMenus()

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
            type={entitiesTypes.menus}
            editRequest={updateMenu}
            createRequest={createMenu}
            activate={activateMenu}
            deactivate={deactivateMenu}
            deleteRequest={deleteMenu}
          />
        )}
    </>
  )
}

export default MenusContainer
