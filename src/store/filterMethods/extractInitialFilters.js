import filterTypes from '../../libs/filterTypes'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
} = filterTypes

const initialFilterSwitch = (type) => {
  switch (type) {
    case INPUT:
      return ''
    case SELECT:
      return { id: null, name: '' }
    case DATE:
      return ''
    case BOOL:
      return null
    default:
      throw new Error('Unknown type')
  }
}

const extractInitialFilters = (initialFilters) => {
  const selectedFilters = {}

  Object.keys(initialFilters).forEach((filter) => {
    const { type } = initialFilters[filter]
    selectedFilters[filter] = initialFilterSwitch(type)
  })

  return selectedFilters
}

export default extractInitialFilters
