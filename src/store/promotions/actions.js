import { setState } from 'store/sharedMethods/actions'
import Provider from './provider'
import BaseActions from '../BaseClasses/BaseActions'

class PromotionsActions extends BaseActions {
  // no need to extend yet
}

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const Actions = new PromotionsActions(Provider, errorHandler, setStore)

  // const fetchPromotions = async () => {
  //   const { response } = await errorHandler(Provider.findAll())

  //   return response
  // }

  return Actions
}
