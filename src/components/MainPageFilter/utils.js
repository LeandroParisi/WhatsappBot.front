import { inputTypes } from 'libs/inputTypes'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
  STATUS,
  RANGE,
} = inputTypes

export const MIN_RANGE_VALUE = 0
export const MAX_RANGE_VALUE = 500

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
    case RANGE:
      return [MIN_RANGE_VALUE, MAX_RANGE_VALUE]
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
