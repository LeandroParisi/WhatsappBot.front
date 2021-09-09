import api from 'services/api'
import getRoute from 'services/config'

const fetchUserMenus = (query = '') => async () => {
  const { url, method } = getRoute('menus', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

const activateMenu = (id) => async () => {
  console.log(id)
  const { url, method } = getRoute('menus', 'activate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const deactivateMenu = (id) => async () => {
  const { url, method } = getRoute('menus', 'deactivate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const updateMenu = ({ id, body }) => async () => {
  const { url, method } = getRoute('menus', 'updateOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
    body,
  })

  return response
}

const deleteMenu = (id) => async () => {
  console.log(id)
  const { url, method } = getRoute('menus', 'deleteOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

export {
  fetchUserMenus,
  activateMenu,
  deactivateMenu,
  updateMenu,
  deleteMenu,
}
