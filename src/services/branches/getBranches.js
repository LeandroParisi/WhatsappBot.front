import api from '../api'
import getRoute from '../config'
import METHODS from '../methods'
import errorHandler from '../errorHandler'

const url = getRoute('branches', 'findAll')

const query = '?columns=id,isActive,managerName,branchName'

const getUserBranches = async (options) => {
  const response = await api({
    ...options,
    url: `${url}${query}`,
    method: METHODS.GET,
  })
  return response
}
export default errorHandler(getUserBranches)
