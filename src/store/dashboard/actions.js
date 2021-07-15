import { setState } from 'store/generalActions'
import assembleQuery from 'services/helpers/assembleQuery'
import * as providers from './provider'

export default (setStore, useRoot) => {
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

  return { fetchUserBranches, setField, fetchBranchOrders }
}
