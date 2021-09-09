import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'
import { filterInterface } from './filters'

const initialState = {
  filters: filterInterface,
  products: [],
  query: '',
}

const productsStore = useCreateStore(() => {
  const [$TEMPLATE, setTEMPLATE] = useState(initialState)
  const actions = storeActions($TEMPLATE, setTEMPLATE, useRoot)
  const selectors = storeSelectors($TEMPLATE)

  useEffect(() => {

  }, [])

  return { $TEMPLATE, ...actions, ...selectors }
})

export const useProducts = () => productsStore()
export const ProductsContext = productsStore.Context
export const ProductsProvider = productsStore.Provider
