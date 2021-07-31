import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userBranches: [],

}

const BranchesStore = useCreateStore(() => {
  const [$branches, setBranches] = useState(initialState)
  const actions = storeActions($branches, setBranches, useRoot)
  const selectors = storeSelectors($branches)

  useEffect(() => {
    console.log('branches')
  }, [])

  return { $branches, ...actions, ...selectors }
})

export const useBranches = () => BranchesStore()
export const BranchesContext = BranchesStore.Context
export const BranchesProvider = BranchesStore.Provider