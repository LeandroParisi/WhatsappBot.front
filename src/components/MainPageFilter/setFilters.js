import filterTypes from 'libs/filterTypes'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
  STATUS,
} = filterTypes

export const extractStatusFilter = ({ name }) => {
  if (name === 'Todos' || name === '') {
    return ''
  }
  if (name === 'Ativo') {
    return 1
  }
  if (name === 'Inativo') {
    return 0
  }
  throw new Error('Status não mapeado')
}

export const extractFilterValues = (filterValue, type) => {
  switch (type) {
    case INPUT:
      return filterValue
    case SELECT:
      throw new Error('Filter extraction logic not implemented')
    case STATUS:
      return extractStatusFilter(filterValue)
    case DATE:
      throw new Error('Filter extraction logic not implemented')
    case BOOL:
      throw new Error('Filter extraction logic not implemented')
    case ICONS:
      return [...filterValue].join(',')
    default:
      throw new Error('Unknown type')
  }
}

export const setFilters = (temporaryFilters, filters, saveFilters) => {
  const extractedFilters = {}

  Object.entries(temporaryFilters).forEach(([filterName, filterValue]) => {
    const filterType = filters.find((f) => f.key === filterName).type
    extractedFilters[filterName] = extractFilterValues(filterValue, filterType)

    if (typeof extractedFilters[filterName] === 'string' && !extractedFilters[filterName].length) {
      delete extractedFilters[filterName]
    }
  })

  saveFilters(extractedFilters)
}
