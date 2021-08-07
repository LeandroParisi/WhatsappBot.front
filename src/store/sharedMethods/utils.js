export const extractFiltersQuery = (filters) => {
  let query = ''
  Object.entries(filters).forEach(([filterName, values], index) => {
    if (index === 0) {
      query += `?${filterName}=${values}`
    } else {
      query += `&${filterName}=${values}`
    }
  })

  return query
}

export const teste = 0
