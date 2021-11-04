import { useEffect, useState } from 'react'
import { useRoot } from 'adminDashboard/store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import filterInterface from './filters'

const initialState = {
  entities: [],
  filters: filterInterface,
  query: '',
}

const promotionsStore = useCreateStore(() => {
  const { $root } = useRoot()
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store, $root)

  useEffect(() => {
    actions.findAll($store.query)
  }, [$store.query])

  return { $store, ...actions, ...selectors }
})

export const usePromotions = () => promotionsStore()
export const PromotionsContext = promotionsStore.Context
export const PromotionsProvider = promotionsStore.Provider
