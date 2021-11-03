import api from 'shared/services/api'
import getRoute from 'shared/services/config'

const activateMenu = (id) => async () => {
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
  const { url, method } = getRoute('menus', 'deleteOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const createMenu = (body) => async () => {
  const { url, method } = getRoute('menus', 'create')

  const response = await api({
    url,
    method,
    body,
  })

  return response
}

export {
  createMenu,
  activateMenu,
  deactivateMenu,
  updateMenu,
  deleteMenu,
}
