import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userBranches: [],
  // filters: filterInterface,
  query: '',
}

const promotionsStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {

  }, [])

  return { $store, ...actions, ...selectors }
})

export const usePromotions = () => promotionsStore()
export const PromotionsContext = promotionsStore.Context
export const PromotionsProvider = promotionsStore.Provider
