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
    const teste = async () => {
      const response = await actions.findAll()
      console.log(response)
    }

    teste()
  }, [])

  useEffect(() => {
    console.log($store)
  })

  return { $store, ...actions, ...selectors }
})

export const usePromotions = () => promotionsStore()
export const PromotionsContext = promotionsStore.Context
export const PromotionsProvider = promotionsStore.Provider
