import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import pageIsNot from 'utils/pageIsNot'
import routes from 'libs/routes'
import rootActions from './actions'
import rootSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userBranches: [],
  error: '',
}

const RootStore = useCreateStore(() => {
  const [$root, setRoot] = useState(initialState)
  const actions = rootActions(setRoot)
  const selectors = rootSelectors($root)
  const { location: { pathname } } = useHistory()

  const { userBranches } = $root

  useEffect(() => {
    if (!userBranches.length && pageIsNot(routes.login, pathname)) {
      actions.fetchUserBranches()
    }
  }, [pathname])

  return { $root, ...actions, ...selectors }
})

export const useRoot = () => RootStore()
export const RootContext = RootStore.Context
export const RootProvider = RootStore.Provider
