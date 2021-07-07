import api from './api'
import getRoute from './urlLib'
import errorHandler from './errorHandler'

const url = getRoute('users', 'auth')

const userAuth = async (options) => {
  const response = await api({
    ...options, url, method: 'GET', withCredentials: true,
  })
  return response
}
export default errorHandler(userAuth)
