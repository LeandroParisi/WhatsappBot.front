import { setState } from 'store/sharedMethods/actions'
import assembleQuery from 'services/helpers/assembleQuery'
import { extractNextStatus } from './utils'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const fetchBranchOrders = async (queryObject) => {
    const query = assembleQuery(queryObject)
    const { response } = await errorHandler(providers.fetchBranchOrders(query))
    delete response.fullfilled
    setField('orders', response)
  }

  const updateOrder = async (id, currentStep, type) => {
    const nextStatus = extractNextStatus(currentStep, type)

    const payload = { body: { status: nextStatus }, id }
    const { response } = await errorHandler(providers.updateOrder(payload))

    if (response) {
      await fetchBranchOrders({
        branchId: store.selectedBranch.id, status: '!fullfilled',
      })
    }
  }

  return {
    setField, fetchBranchOrders, updateOrder,
  }
}
