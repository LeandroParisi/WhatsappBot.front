import api from 'shared/services/api'
import getRoute from 'shared/services/config'
import BaseProvider from '../BaseClasses/BaseProvider'

class CoupomProvider extends BaseProvider {
  getConditions(query = '') {
    return async () => {
      const { url, method } = getRoute(this.baseRoute, 'conditions')

      const response = await api({
        url: `${url}${query}`,
        method,
      })
      return response
    }
  }
}

const CouponsProvider = new CoupomProvider('coupons')

export default CouponsProvider
