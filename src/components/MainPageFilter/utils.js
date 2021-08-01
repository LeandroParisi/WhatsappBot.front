import filterTypes from 'libs/filterTypes'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
} = filterTypes

export const initialValuesSwitch = (type) => {
  switch (type) {
    case INPUT:
      return ''
    case SELECT:
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
