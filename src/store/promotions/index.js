import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import filterInterface from './filters'

const initialState = {
  userBranches: [],
  entities: [],
  filters: filterInterface,
  query: '',
}

const promotionsStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const Actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {
    console.log('fetching')
    Actions.findAll($store.query)
  }, [$store.query])

  useEffect(() => {
    console.log($store)
  })

  return { $store, Actions, ...selectors }
})

export const usePromotions = () => promotionsStore()
export const PromotionsContext = promotionsStore.Context
export const PromotionsProvider = promotionsStore.Provider
