/* eslint-disable no-case-declarations */
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

export const initialValuesSwitch = (type, filter) => {
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
      const { max, min } = filter
      return { limit: [min, max], currentLimit: [min, max] }
    default:
      throw new Error('Unknown type')
  }
}

export const extractInitialValues = (filters) => {
  const initialValues = {}

  filters.forEach((filter) => {
    const { type, key } = filter
    initialValues[key] = initialValuesSwitch(type, filter)
  })

  return initialValues
}
