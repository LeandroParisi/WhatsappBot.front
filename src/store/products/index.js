import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import { categories } from 'interfaces/products/productsInterface'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  filters: [],
  products: [],
  categories: [],
  userMenus: [],
  isPageLoaded: false,
  // userBranches: [],
  query: '',
}

const productsStore = useCreateStore(() => {
  const { $root } = useRoot()
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store, $root)

  useEffect(() => {
    actions.fetchCategories()
    actions.fetchUserMenus()
  }, [])

  useEffect(() => {
    if ($root.userProducts.length) {
      actions.setField('products', [...$root.userProducts])
      actions.setField('isPageLoaded', true)
    }
  }, [$root.userProducts])

  useEffect(() => {
    if ($store.isPageLoaded) {
      actions.fetchUserProducts($store.query)
    }
  }, [$store.query])

  useEffect(() => {
    if ($store.categories.length) {
      actions.filtersFactory()
    }
  }, [$store.categories])

  return { $store, ...actions, ...selectors }
})

export const useProducts = () => productsStore()
export const ProductsContext = productsStore.Context
export const ProductsProvider = productsStore.Provider
