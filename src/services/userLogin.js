import api from './api'
import getRoute from './urlLib'
import errorHandler from './errorHandler'

const url = getRoute('users', 'login')

const userLogin = async (options) => {
  const response = await api({ ...options, url, method: 'POST' })
  return response
}
export default errorHandler(userLogin)
