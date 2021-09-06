import { extractFiltersQuery } from './utils'

const setState = (setter) => (field, value) => {
  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
}

const handleIconSelectFactory = (state, stateSetter) => (id, key) => () => {
  const previousSelectedIcons = new Set([...state[key]])
  if (previousSelectedIcons.has(id)) {
    previousSelectedIcons.delete(id)
    return stateSetter(key, previousSelectedIcons)
  }
  return stateSetter(key, new Set([...previousSelectedIcons, id]))
}

const validateInput = (validation, value, setter) => {
  const isValid = validation(value)
  setter((prev) => ({
    ...prev,
    error: !isValid,
  }))
}

const setOption = (setter, field) => (value) => {
  setter(field, value)
}

const saveFiltersFactory = (setter) => (filters) => {
  setter('query', extractFiltersQuery(filters))
}

const activateEntityFactory = (setter, errorHandler, fetcher, stateKey, store) => async (id) => {
  const { response } = await errorHandler(fetcher(id))

  if (response) {
    const updatedEntities = store[stateKey].map((entity) => {
      if (entity.id === id) {
        return {
          ...entity,
          isActive: true,
        }
      }
      return entity
    })

    setter(stateKey, updatedEntities)
  }
}

const deactivateEntityFactory = (setter, errorHandler, fetcher, stateKey, store) => async (id) => {
  const { response } = await errorHandler(fetcher(id))

  if (response) {
    const updatedEntities = store[stateKey].map((entity) => {
      if (entity.id === id) {
        return {
          ...entity,
          isActive: false,
        }
      }
      return entity
    })

    setter(stateKey, updatedEntities)
  }
}

export {
  setState,
  validateInput,
  setOption,
  saveFiltersFactory,
  handleIconSelectFactory,
  activateEntityFactory,
  deactivateEntityFactory,
}
