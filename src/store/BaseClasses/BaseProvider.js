import api from 'services/api'
import getRoute from 'services/config'

class BaseProvider {
  constructor(baseRoute) {
    this.baseRoute = baseRoute
  }

  findAll(query = '') {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'findAll')

      const response = await api({
        url: `${url}${query}`,
        method,
      })
      return response
    }
  }

  update({ id, body }) {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'updateOne')

      const response = await api({
        url: `${url}/${id}`,
        method,
        body,
      })

      return response
    }
  }

  activate(id) {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'activate')

      const response = await api({
        url: `${url}/${id}`,
        method,
      })

      return response
    }
  }

  deactivate(id) {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'deactivate')

      const response = await api({
        url: `${url}/${id}`,
        method,
      })

      return response
    }
  }

  delete(id) {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'deleteOne')

      const response = await api({
        url: `${url}/${id}`,
        method,
      })

      return response
    }
  }

  create(body) {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'create')

      const response = await api({
        url,
        method,
        body,
      })

      return response
    }
  }
}

export default BaseProvider
