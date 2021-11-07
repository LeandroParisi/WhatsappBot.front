import { useEffect, useState } from 'react'
import { useRoot } from 'adminDashboard/store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import filterInterface from './filters'
import { MAIN_FIELD } from './config'

const initialState = {
  [MAIN_FIELD]: [],
  filters: filterInterface,
  query: '',
  conditions: [],
}

const couponsStore = useCreateStore(() => {
  const { $root } = useRoot()
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store, $root)

  useEffect(() => {
    actions.findAll($store.query)
  }, [$store.query])

  useEffect(() => {
    actions.getConditions()
  }, [])

  return {
    $store, ...selectors, ...actions,
  }
})

export const useCoupons = () => couponsStore()
export const CouponsContext = couponsStore.Context
export const CouponsProvider = couponsStore.Provider
