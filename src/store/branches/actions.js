import { saveFiltersFactory, setState } from 'store/sharedMethods/actions'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'
import { validateEditBody } from './validations'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserBranches = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches(query))

    if (response) {
      setField('userBranches', response)
    }
  }

  const updateBranch = async ({ id, body }) => {
    const normalizedBody = normalizeEditPayload(body)

    const isValid = validateEditBody(normalizedBody)

    console.log({ isValid })

    const { response } = await errorHandler(providers.updateBranch(
      { id, body: normalizedBody },
    ))

    if (response) {
      await fetchUserBranches()
    }
  }

  const activateBranch = async (id) => {
    const { response } = await errorHandler(providers.activateBranch(id))

    if (response) {
      const updatedBranches = store.userBranches.map((branch) => {
        if (branch.id === id) {
          return {
            ...branch,
            isActive: true,
          }
        }
        return branch
      })

      setField('userBranches', updatedBranches)
    }
  }

  const deactivateBranch = async (id) => {
    const { response } = await errorHandler(providers.deactivateBranch(id))

    if (response) {
      const updatedBranches = store.userBranches.map((branch) => {
        if (branch.id === id) {
          return {
            ...branch,
            isActive: false,
          }
        }
        return branch
      })

      setField('userBranches', updatedBranches)
    }
  }
  return {
    setField,
    fetchUserBranches,
    saveFilters,
    updateBranch,
    activateBranch,
    deactivateBranch,
  }
}
