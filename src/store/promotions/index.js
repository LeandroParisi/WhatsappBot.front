import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import filterInterface from './filters'

const initialState = {
  entities: [],
  userProducts: [],
  userBranches: [],
  filters: filterInterface,
  query: '',
}

const promotionsStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {
    actions.findAll($store.query)
  }, [$store.query])

  useEffect(() => {
    actions.fetchUserProducts()
    actions.fetchUserBranches()
  }, [])

  return { $store, ...actions, ...selectors }
})

export const usePromotions = () => promotionsStore()
export const PromotionsContext = promotionsStore.Context
export const PromotionsProvider = promotionsStore.Provider
