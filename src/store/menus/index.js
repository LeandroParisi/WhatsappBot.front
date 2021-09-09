import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import { filterInterface } from './filters'
// import { extractInitialFilters } from '../filterMethods/extractInitialFilters'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userMenus: [],
  userProducts: [],
  userBranches: [],
  filters: filterInterface,
  query: '',
}

const MenusStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {
    actions.fetchUserMenus($store.query)
  }, [$store.query])

  useEffect(() => {
    actions.fetchUserProducts()
    actions.fetchUserBranches()
  }, [])

  return { $store, ...actions, ...selectors }
})

export const useMenus = () => MenusStore()
export const MenusContext = MenusStore.Context
export const MenusProvider = MenusStore.Provider
