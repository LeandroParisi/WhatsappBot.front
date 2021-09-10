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
  query: '',
}

const productsStore = useCreateStore(() => {
  const [$store, setStore] = useState(initialState)
  const actions = storeActions($store, setStore, useRoot)
  const selectors = storeSelectors($store)

  useEffect(() => {
    actions.fetchCategories()
  }, [])

  useEffect(() => {
    actions.fetchUserProducts($store.query)
  }, [$store.query])

  useEffect(() => {
    console.log($store.query)
  })

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
