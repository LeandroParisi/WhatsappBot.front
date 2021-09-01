import METHODS from './methods'

require('dotenv').config()

const env = process.env.REACT_APP_ENV

const backendUrl = {
  dev: `${process.env.REACT_APP_LOCAL_URL}`,
}

const routes = {
  users: '/users',
  branches: '/branches',
  orders: '/orders',
}

const endpoints = {
  users: {
    login:
    {
      endpoint: '/login',
      method: METHODS.POST,
    },
    auth:
    {
      endpoint: '/auth',
      method: METHODS.GET,
    },
  },
  branches: {
    findAll: {
      endpoint: '',
      method: METHODS.GET,
    },
    updateOne: {
      endpoint: '',
      method: METHODS.PUT,
    },
  },
  orders: {
    findAll: {
      endpoint: '',
      method: METHODS.GET,
    },
    updateOne: {
      endpoint: '',
      method: METHODS.PUT,
    },
  },
}

const getRoute = (route, ep) => {
  const { endpoint, method } = endpoints[route][ep]
  return {
    url: `${backendUrl[env]}${routes[route]}${endpoint}`,
    method,
  }
}

export default getRoute
