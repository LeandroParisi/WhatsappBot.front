import {
  saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import validationFactory from 'store/sharedMethods/validationFactory'
import { toast } from 'react-toastify'
import Provider from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { editValidations, errorsLib, createValidations } from './validations'
import { normalizeEditPayload } from './serializers'
import { MAIN_FIELD } from './config'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const findAll = async (query = '') => {
    const { response } = await errorHandler(Provider.findAll(query))

    if (response) {
      setField(MAIN_FIELD, response)
    }
  }

  const update = async ({ id, body }) => {
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

  const create = async ({ body }) => {
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

  const destroy = async (id) => {
    const { response } = await errorHandler(Provider.delete(id))

    if (response) {
      await findAll()
    }
  }

  const activate = async (id) => {
    const { response } = await errorHandler(Provider.activate(id))

    if (response) {
      const updatedEntities = store[MAIN_FIELD].map((entity) => {
        if (entity.id === id) {
          return {
            ...entity,
            isActive: true,
          }
        }
        return entity
      })

      setField(MAIN_FIELD, updatedEntities)
    }
  }

  const deactivate = async (id) => {
    const { response } = await errorHandler(Provider.deactivate(id))

    if (response) {
      const updatedEntities = store[MAIN_FIELD].map((entity) => {
        if (entity.id === id) {
          return {
            ...entity,
            isActive: false,
          }
        }
        return entity
      })

      setField(MAIN_FIELD, updatedEntities)
    }
  }

  return {
    saveFilters,
    findAll,
    update,
    create,
    destroy,
    activate,
    deactivate,
  }
}
