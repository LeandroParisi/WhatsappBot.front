import { saveFiltersFactory, setState } from 'store/sharedMethods/actions'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'

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

  const updateBranch = async ({ id, body }) => {
    const { response } = await errorHandler(providers.updateBranch(
      { id, body: normalizeEditPayload(body) },
    ))

    if (response) {
      await fetchUserBranches()
    }
  }

  return {
    setField,
    fetchUserBranches,
    saveFilters,
    updateBranch,
  }
}
