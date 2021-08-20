import { extractFiltersQuery } from './utils'

const setState = (setter) => (field, value) => {
  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
}

const handleIconSelectFactory = (state, stateSetter) => (id, key) => () => {
  console.log(state)
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

export {
  setState, validateInput, setOption, saveFiltersFactory, handleIconSelectFactory,
}
