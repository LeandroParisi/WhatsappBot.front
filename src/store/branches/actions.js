import { saveFiltersFactory, setState } from 'store/sharedMethods/actions'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserBranches = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches(query))

    if (response?.length) {
      setField('userBranches', response)
    }
  }

  return {
    setField,
    fetchUserBranches,
    saveFilters,
  }
}
