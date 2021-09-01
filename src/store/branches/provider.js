import api from 'services/api'
import getRoute from 'services/config'

const updateBranch = ({ id, body }) => async () => {
  const { url, method } = getRoute('branches', 'updateOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
    body,
  })

  return response
}

const activateBranch = (id) => async () => {
  const { url, method } = getRoute('branches', 'activate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const deactivateBranch = (id) => async () => {
  const { url, method } = getRoute('branches', 'deactivate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

export {
  updateBranch,
  activateBranch,
  deactivateBranch,
}
