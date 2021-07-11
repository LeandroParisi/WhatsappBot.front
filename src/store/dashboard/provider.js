import api from 'services/api'
import getRoute from 'services/config'
import METHODS from 'services/methods'

const url = getRoute('branches', 'findAll')

const query = '?columns=id,isActive,managerName,branchName'

const fetchUserBranches = async (options) => {
  const response = await api({
    ...options,
    url: `${url}${query}`,
    method: METHODS.GET,
  })
  return response
}
export { fetchUserBranches }
