import { setState } from 'store/generalActions'
import * as providers from './provider'

export default (setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const fetchUserBranches = async () => {
    const { response } = await errorHandler(providers.fetchUserBranches)
    setField('branches', response)

    if (response.length === 1) {
      const { branchName, id } = response[0]
      setField('selectedBranch', { name: branchName, id })
    }
  }

  // const fetch

  return { fetchUserBranches, setField }
}
