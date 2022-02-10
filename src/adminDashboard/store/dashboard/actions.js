import { setState } from 'adminDashboard/store/sharedMethods/actions'
import assembleQuery from 'shared/services/helpers/assembleQuery'
import { extractNextStatus } from './utils'
import * as sharedProviders from '../sharedMethods/providers'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const fetchBranchOrders = async (branchId, queryObject) => {
    const query = assembleQuery(queryObject)
    const { response } = await errorHandler(
      providers.fetchBranchOrders(branchId, query), { loader: false },
    )

    if (response) {
      delete response.fullfilled
      setField('orders', response)
    }
  }

  const updateOrder = async (id, currentStep, type) => {
    const nextStatus = extractNextStatus(currentStep, type)

    const payload = { body: { status: nextStatus }, id }
    const { response } = await errorHandler(providers.updateOrder(payload), { loader: false })

    if (response) {
      await fetchBranchOrders(
        store.selectedBranch.id,
        {
          status: '1,2,3',
          groupedByStatus: '1',
        },
      )
    }
  }

  return {
    setField, fetchBranchOrders, updateOrder,
  }
}
