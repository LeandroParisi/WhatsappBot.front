import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import userActions from './actions'
import userSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  branches: [],
}

const UserStore = useCreateStore(() => {
  const [$user, setUser] = useState(initialState)
  const actions = userActions(setUser, useRoot)
  const selectors = userSelectors($user)

  return { $user, ...actions, ...selectors }
})

export const useUser = () => UserStore()
export const UserContext = UserStore.Context
export const UserProvider = UserStore.Provider
