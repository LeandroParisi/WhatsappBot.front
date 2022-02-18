import {
  saveFiltersFactory, setState,
} from 'adminDashboard/store/sharedMethods/actions'
import validationFactory from 'adminDashboard/store/sharedMethods/validationFactory'
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

    console.log({ response })

    if (response) {
      setField(MAIN_FIELD, response)
    }
  }

  const update = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(
      body, editValidations, errorsLib, { conditions: store.conditions },
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.update({ id, body: normalizedBody }))
    console.log({ response })

    if (response) {
      await findAll()
    }

    return { hasErrors }
  }

  const create = async ({ body }) => {
    console.log({ body })
    const { hasErrors, errors } = await validationFactory(
      body, createValidations, errorsLib, { conditions: store.conditions },
    )

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.create(normalizedBody))
    console.log({ response })

    if (response) {
      await findAll()
    }

    return { hasErrors }
  }

  const destroy = async (id) => {
    const { response } = await errorHandler(Provider.delete(id))
    console.log({ response })

    if (response) {
      await findAll()
    }
  }

  const activate = async (id) => {
    const { response } = await errorHandler(Provider.activate(id))
    console.log({ response })

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
    console.log({ response })

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

  const getConditions = async () => {
    const { response } = await errorHandler(Provider.getConditions())
    console.log({ response })

    if (response) {
      setField('conditions', response)
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
    getConditions,
  }
}
