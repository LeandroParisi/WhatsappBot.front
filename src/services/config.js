require('dotenv').config()

const env = process.env.REACT_APP_ENV

const backendUrl = {
  dev: `${process.env.REACT_APP_LOCAL_URL}`,
}

const routes = {
  users: '/users',
  branches: '/branches',
}

const endpoints = {
  users: {
    login: '/login',
    auth: '/auth',
  },
  branches: {
    findAll: '',
  },
}

const getRoute = (route, endpoint) => `${backendUrl[env]}${routes[route]}${endpoints[route][endpoint]}`

export default getRoute
