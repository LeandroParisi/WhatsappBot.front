import { saveFiltersFactory, setState } from 'store/sharedMethods/actions'
import { getFilterInterface } from './filters'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchCategories = async () => {
    const { response } = await errorHandler(providers.fetchCategories())

    if (response) {
      setField('categories', response)
    }
  }

  const fetchUserProducts = async (query) => {
    const { response } = await errorHandler(providers.fetchUserProducts(query))

    if (response) {
      setField('products', response)
    }
  }

  const filtersFactory = () => {
    setField('filters', getFilterInterface(store.categories))
  }

  return {
    setField,
    saveFilters,
    fetchCategories,
    filtersFactory,
    fetchUserProducts,
  }
}
