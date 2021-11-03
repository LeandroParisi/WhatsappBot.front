import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import initialResourcesPages from 'shared/libs/routes/initialResourcesPages'
import rootActions from './actions'
import rootSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  isLoading: false,
  error: '',
  initialResourcesLoaded: false,
  userBranches: [],
  userProducts: [],
  // TODO: implementar fetch de recursos estáticos e usá-los para substituir as interfaces hardCoded
  // categories: [],
}

const RootStore = useCreateStore(() => {
  const [$root, setRoot] = useState(initialState)
  const actions = rootActions(setRoot)
  const selectors = rootSelectors($root)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!$root.initialResourcesLoaded && initialResourcesPages.has(pathname)) {
      actions.fetchUserBranches()
      actions.fetchUserProducts()
      actions.setField('initialResourcesLoaded', true)
    }
  }, [pathname])

  return { $root, ...actions, ...selectors }
})

export const useRoot = () => RootStore()
export const RootContext = RootStore.Context
export const RootProvider = RootStore.Provider
