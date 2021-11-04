import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'adminDashboard/store/sharedMethods/actions'
import validationFactory from 'adminDashboard/store/sharedMethods/validationFactory'
import { toast } from 'react-toastify'
import { getFilterInterface } from './filters'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { errorsLib, editValidations, createValidations } from './validations'
import { normalizeEditPayload } from './serializers'

export default (store, setStore, useRoot) => {
  const { errorHandler, fetchUserProducts: rootFetchUserProducts } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchCategories = async () => {
    const { response } = await errorHandler(providers.fetchCategories())

    if (response) {
      setField('categories', response)
    }
  }

  const fetchUserMenus = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserMenus(query))

    if (response) {
      setField('userMenus', response)
    }
  }

  const fetchUserProducts = async (query) => {
    const { response } = await errorHandler(providers.fetchUserProducts(query))

    if (response) {
      setField('products', response)
    }
  }

  const updateProduct = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(
      body, editValidations, errorsLib,
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(providers.updateProduct(
      { id, body: normalizedBody },
    ))

    if (response) {
      await rootFetchUserProducts()
    }

    return { hasErrors: false }
  }

  const filtersFactory = () => {
    setField('filters', getFilterInterface(store.categories))
  }

  const createProduct = async ({ body }) => {
    const { hasErrors, errors } = await validationFactory(
      body, createValidations, errorsLib,
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(providers.createProduct(normalizedBody))

    if (response) {
      await rootFetchUserProducts()
    }

    return { hasErrors }
  }

  const deleteProduct = async (id) => {
    const { response } = await errorHandler(providers.deleteProduct(id))

    if (response) {
      await rootFetchUserProducts()
    }
  }

  const activateProduct = async (id) => {
    const { response } = await errorHandler(providers.activateProduct(id))

    if (response) {
      await rootFetchUserProducts()
    }
  }

  const deactivateProduct = async (id) => {
    const { response } = await errorHandler(providers.deactivateProduct(id))

    if (response) {
      await rootFetchUserProducts()
    }
  }

  return {
    setField,
    saveFilters,
    fetchCategories,
    filtersFactory,
    fetchUserProducts,
    fetchUserMenus,
    updateProduct,
    createProduct,
    deleteProduct,
    activateProduct,
    deactivateProduct,
  }
}
