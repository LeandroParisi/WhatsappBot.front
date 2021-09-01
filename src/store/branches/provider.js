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

export {
  updateBranch,
}
