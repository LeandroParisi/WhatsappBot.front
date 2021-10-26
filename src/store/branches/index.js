import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import { filterInterface } from './filters'
// import { extractInitialFilters } from '../filterMethods/extractInitialFilters'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userBranches: [],
  filters: filterInterface,
  isPageLoaded: false,
  query: '',
}

const BranchesStore = useCreateStore(() => {
  const { $root } = useRoot()
  const [$branches, setBranches] = useState(initialState)
  const actions = storeActions($branches, setBranches, useRoot)
  const selectors = storeSelectors($branches)

  useEffect(() => {
    if ($root.userBranches.length) {
      actions.setField('userBranches', [...$root.userBranches])
      actions.setField('isPageLoaded', true)
    }
  }, [$root.userBranches])

  useEffect(() => {
    if ($branches.isPageLoaded) {
      console.log('query', $branches.query)
      actions.fetchUserBranches($branches.query)
    }
  }, [$branches.query])

  return { $branches, ...actions, ...selectors }
})

export const useBranches = () => BranchesStore()
export const BranchesContext = BranchesStore.Context
export const BranchesProvider = BranchesStore.Provider
