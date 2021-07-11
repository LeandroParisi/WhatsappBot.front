import getBranches from 'services/branches/getBranches'
import { setState } from 'store/generalActions'
import * as providers from './provider'

export default (setUser, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setUser)

  const getUserBranches = async () => {
    const { response } = await errorHandler(getBranches)
    setField('branches', response)
  }

  return { getUserBranches }
}
