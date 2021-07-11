import api from '../api'
import getRoute from '../config'
import METHODS from '../methods'
import errorHandler from '../errorHandler'

const url = getRoute('users', 'auth')

const userAuth = async (options) => {
  const response = await api({
    ...options, url, method: METHODS.GET,
  })
  return response
}
export default errorHandler(userAuth)
