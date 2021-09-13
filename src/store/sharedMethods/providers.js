import api from 'services/api'
import getRoute from 'services/config'
import { VIA_CEP } from 'services/externalRoutes'
import METHODS from 'services/methods'

export const fetchUserBranches = (query = '') => async () => {
  const { url, method } = getRoute('branches', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

export const fetchUserProducts = (query = '') => async () => {
  const { url, method } = getRoute('products', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

export const fetchUserMenus = (query = '') => async () => {
  const { url, method } = getRoute('menus', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

export const validateCep = async (cep) => {
  const response = await api({
    url: `${VIA_CEP}/${cep}/json`,
    method: METHODS.GET,
  })

  return response
}
