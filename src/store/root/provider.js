import api from 'services/api'
import getRoute from 'services/config'

export const teste = () => 1

export const fetchUserBranches = (query = '') => async () => {
  const { url, method } = getRoute('branches', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}
