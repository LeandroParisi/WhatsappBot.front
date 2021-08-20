import { inputTypes } from 'libs/inputTypes'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
  STATUS,
} = inputTypes

export const initialValuesSwitch = (type) => {
  switch (type) {
    case INPUT:
      return ''
    case SELECT:
      return { id: null, name: '' }
    case STATUS:
      return { id: null, name: '' }
    case DATE:
      return ''
    case BOOL:
      return null
    case ICONS:
      return new Set([])
    default:
      throw new Error('Unknown type')
  }
}

export const extractInitialValues = (filters) => {
  const initialValues = {}

  filters.forEach(({ type, key }) => {
    initialValues[key] = initialValuesSwitch(type)
  })

  return initialValues
}
