import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import filterInterface from './filters'
import { MAIN_FIELD } from './config'

const initialState = {
  [MAIN_FIELD]: [],
  filters: filterInterface,
  query: '',
}

const couponsStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {
    actions.findAll($store.query)
  }, [$store.query])

  // useEffect(() => {
  //   actions.fetchUserProducts()
  //   actions.fetchUserBranches()
  // }, [])

  return {
    $store, ...selectors, ...actions,
  }
})

export const useCoupons = () => couponsStore()
export const CouponsContext = couponsStore.Context
export const CouponsProvider = couponsStore.Provider
