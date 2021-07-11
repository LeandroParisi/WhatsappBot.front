import api from '../api'
import getRoute from '../config'
import METHODS from '../methods'
import responseHandler from '../responseHandler'

const url = getRoute('users', 'login')

const userLogin = async (options) => {
  const response = await api({
    ...options, url, method: METHODS.POST,
  })
  return response
}
export default responseHandler(userLogin)
