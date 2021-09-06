import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useMenus, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'components/EntitiesContainer/EntitiesInterface'
import { MainPageFilter } from 'components'

const MenusContainer = () => {
  const {
    activateMenu, deactivateMenu,
  } = useMenus()
  const {
    getMenus, getFilters, saveFilters,
  } = useMenus()

  const { getIsLoading } = useRoot()
  const filters = getFilters()

  console.log(getMenus())

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
            entities={getMenus()}
            type={entitiesTypes.menus}
            // editRequest={updateBranch}
            activate={activateMenu}
            deactivate={deactivateMenu}
          />
        )}
    </>
  )
}

export default MenusContainer
