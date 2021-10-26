import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import { filterInterface } from './filters'
// import { extractInitialFilters } from '../filterMethods/extractInitialFilters'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userMenus: [],
  filters: filterInterface,
  query: '',
}

const MenusStore = useCreateStore(() => {
  const { $root } = useRoot()
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store, $root)

  useEffect(() => {
    actions.fetchUserMenus($store.query)
  }, [$store.query])

  return { $store, ...actions, ...selectors }
})

export const useMenus = () => MenusStore()
export const MenusContext = MenusStore.Context
export const MenusProvider = MenusStore.Provider
