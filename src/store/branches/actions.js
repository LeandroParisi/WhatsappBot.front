import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import { toast } from 'react-toastify'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'
import validationFactory from '../sharedMethods/validationFactory'
import { editValidations, createValidations, errorsLib } from './validations'

export default (store, setStore, useRoot) => {
  const { errorHandler, setField: setRootField } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserBranches = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches(query))

    if (response) {
      setField('userBranches', response)
      setRootField('userBranches', response)
    }
  }

  const createBranch = async ({ body }) => {
    const { hasErrors, errors } = await validationFactory(body, createValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(providers.createBranch(normalizedBody))

    if (response) {
      await fetchUserBranches()
    }

    return { hasErrors }
  }

  const deleteBranch = async (id) => {
    const { response } = await errorHandler(providers.deleteBranch(id))

    if (response) {
      await fetchUserBranches()
    }
  }

  const updateBranch = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(body, editValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(providers.updateBranch(
      { id, body: normalizedBody },
    ))

    if (response) {
      await fetchUserBranches()
    }

    return { hasErrors }
  }

  const activateBranch = activateEntityFactory(setField, errorHandler, providers.activateBranch, 'userBranches', store)

  const deactivateBranch = deactivateEntityFactory(setField, errorHandler, providers.deactivateBranch, 'userBranches', store)

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
