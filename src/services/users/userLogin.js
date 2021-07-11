import api from '../api'
import getRoute from '../config'
import METHODS from '../methods'
import errorHandler from '../errorHandler'

const url = getRoute('users', 'login')

const userLogin = async (options) => {
  const response = await api({
    ...options, url, method: METHODS.POST,
  })
  return response
}
export default errorHandler(userLogin)
