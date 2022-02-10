import api from 'shared/services/api'
import getRoute from 'shared/services/config'

const fetchBranchOrders = (branchId, query) => async () => {
  const { url, method } = getRoute('orders', 'byBranch')

  const response = await api({
    url: `${url}/${branchId}${query}`,
    method,
  })
  return response
}

const updateOrder = ({ body, id }) => async () => {
  const { url, method } = getRoute('orders', 'updateOne')

  const endpoint = `${url}/${id}`

  const response = await api({
    body, url: endpoint, method,
  })
  return response
}

export { fetchBranchOrders, updateOrder }
