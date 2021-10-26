import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import { toast } from 'react-toastify'
import Provider from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'
import validationFactory from '../sharedMethods/validationFactory'
import { editValidations, createValidations, errorsLib } from './validations'

export default (store, setStore, useRoot) => {
  const {
    errorHandler,
    fetchUserBranches: rootFetchUserBranches,
  } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserBranches = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches(query))

    if (response) {
      setField('userBranches', response)
    }
  }

  const createBranch = async ({ body }) => {
    const { hasErrors, errors } = await validationFactory(body, createValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.create(normalizedBody))

    if (response) {
      await rootFetchUserBranches()
    }

    return { hasErrors }
  }

  const deleteBranch = async (id) => {
    const { response } = await errorHandler(Provider.delete(id))

    if (response) {
      await rootFetchUserBranches()
    }
  }

  const updateBranch = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(body, editValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.update(
      { id, body: normalizedBody },
    ))

    if (response) {
      await rootFetchUserBranches()
    }

    return { hasErrors }
  }

  const activateBranch = async (id) => {
    const { response } = await errorHandler(Provider.activate(id))

    if (response) {
      await rootFetchUserBranches()
    }
  }

  const deactivateBranch = async (id) => {
    const { response } = await errorHandler(Provider.deactivate(id))

    if (response) {
      await rootFetchUserBranches()
    }
  }

  return {
    setField,
    fetchUserBranches,
    saveFilters,
    updateBranch,
    activateBranch,
    deactivateBranch,
    createBranch,
    deleteBranch,
  }
}
