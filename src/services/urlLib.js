require('dotenv').config()

const env = process.env.REACT_APP_ENV

const backendUrl = {
  dev: `${process.env.REACT_APP_LOCAL_URL}${process.env.REACT_APP_LOCAL_PORT}`,
}

const routes = {
  users: '/users',
}

const endpoints = {
  users: {
    login: '/login',
  },
}

const getRoute = (route, endpoint) => `${backendUrl[env]}${routes[route]}${endpoints[route][endpoint]}`

export default getRoute
