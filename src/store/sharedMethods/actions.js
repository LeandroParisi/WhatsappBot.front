import { extractFiltersQuery } from './utils'

const setState = (setter) => (field, value) => {
  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
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
  setState, validateInput, setOption, saveFiltersFactory,
}
