import { setState } from 'store/generalActions'
import assembleQuery from 'services/helpers/assembleQuery'
import orderStatus from 'interfaces/orders/orderStatus'
import { extractNextStatus } from './utils'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const fetchUserBranches = async () => {
    const { response } = await errorHandler(providers.fetchUserBranches)

    if (response?.length) {
      setField('branches', response)

      if (response?.length === 1) {
        const { branchName, id } = response[0]
        setField('selectedBranch', { name: branchName, id })
      }
    }
  }

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
    fetchUserBranches, setField, fetchBranchOrders, updateOrder,
  }
}
