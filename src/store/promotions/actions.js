import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import validationFactory from 'store/sharedMethods/validationFactory'
import { toast } from 'react-toastify'
import Provider from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { editValidations, errorsLib, createValidations } from './validations'
import { normalizeEditPayload } from './serializers'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const findAll = async (query = '') => {
    const { response } = await errorHandler(Provider.findAll(query))

    if (response) {
      setField('entities', response)
    }
  }

  const fetchUserProducts = async () => {
    const { response } = await errorHandler(sharedProviders.fetchUserProducts())

    if (response) {
      setField('userProducts', response)
    }
  }

  const fetchUserBranches = async () => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches())

    if (response) {
      setField('userBranches', response)
    }
  }

  const updatePromotion = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(
      body, editValidations, errorsLib,
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.update({ id, body: normalizedBody }))

    if (response) {
      await findAll()
    }

    return { hasErrors }
  }

  const createPromotion = async ({ body }) => {
    const { hasErrors, errors } = await validationFactory(
      body, createValidations, errorsLib,
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.create(normalizedBody))

    if (response) {
      await findAll()
    }

    return { hasErrors }
  }

  const deletePromotion = async (id) => {
    const { response } = await errorHandler(Provider.delete(id))

    if (response) {
      await findAll()
    }
  }

  const activatePromotion = async (id) => {
    const { response } = await errorHandler(Provider.activate(id))

    if (response) {
      const updatedEntities = store.entities.map((entity) => {
        if (entity.id === id) {
          return {
            ...entity,
            isActive: true,
          }
        }
        return entity
      })

      setField('entities', updatedEntities)
    }
  }

  const deactivatePromotion = async (id) => {
    const { response } = await errorHandler(Provider.deactivate(id))

    if (response) {
      const updatedEntities = store.entities.map((entity) => {
        if (entity.id === id) {
          return {
            ...entity,
            isActive: false,
          }
        }
        return entity
      })

      setField('entities', updatedEntities)
    }
  }

  return {
    saveFilters,
    findAll,
    fetchUserProducts,
    fetchUserBranches,
    updatePromotion,
    createPromotion,
    deletePromotion,
    activatePromotion,
    deactivatePromotion,
  }
}
