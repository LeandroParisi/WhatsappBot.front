import api from 'shared/services/api'
import getRoute from 'shared/services/config'

const fetchCategories = () => async () => {
  const { url, method } = getRoute('products', 'categories')

  const response = await api({
    url,
    method,
  })

  return response
}

const fetchUserProducts = (query = '') => async () => {
  const { url, method } = getRoute('products', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

const updateProduct = ({ id, body }) => async () => {
  const { url, method } = getRoute('products', 'updateOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
    body,
  })

  return response
}

const createProduct = (body) => async () => {
  const { url, method } = getRoute('products', 'create')

  const response = await api({
    url: `${url}`,
    method,
    body,
  })

  return response
}

const activateProduct = (id) => async () => {
  const { url, method } = getRoute('products', 'activate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const deactivateProduct = (id) => async () => {
  const { url, method } = getRoute('products', 'deactivate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const deleteProduct = (id) => async () => {
  const { url, method } = getRoute('products', 'deleteOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

export {
  fetchCategories,
  fetchUserProducts,
  updateProduct,
  createProduct,
  activateProduct,
  deactivateProduct,
  deleteProduct,
}
