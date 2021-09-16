import { setState } from 'store/sharedMethods/actions'
import Provider from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import BaseActions from '../BaseClasses/BaseActions'

class PromotionsActions extends BaseActions {
  async fetchUserProducts() {
    const { response } = await this.errorHandler(sharedProviders.fetchUserProducts())

    if (response) {
      this.setField('products', response)
    }
  }
  // no need to extend yet
}

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const Actions = new PromotionsActions(Provider, errorHandler, setStore)

  // const fetchPromotions = async () => {
  //   const { response } = await errorHandler(Provider.findAll())

  //   return response
  // }

  return Actions
}
