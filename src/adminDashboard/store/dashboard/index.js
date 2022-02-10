import { useEffect, useState } from 'react'
import { useRoot } from 'adminDashboard/store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  orders: {
    1: [],
    2: [],
    3: [],
  },
  selectedBranch: { name: '', id: '' },
}

const DashboardStore = useCreateStore(() => {
  const [$dashboard, setDashboard] = useState(initialState)
  const { $root, $root: { userBranches } } = useRoot()
  const actions = storeActions($dashboard, setDashboard, useRoot)
  const selectors = storeSelectors($dashboard, $root)

  const { selectedBranch } = $dashboard

  useEffect(() => {
    if (selectedBranch.name) {
      actions.fetchBranchOrders(
        selectedBranch.id,
        {
          status: '1,2,3',
          groupedByStatus: '1',
        },
      )
    }
  }, [selectedBranch.name])

  useEffect(() => {
    if (userBranches.length === 1) {
      const { branchName, id } = userBranches[0]
      actions.setField('selectedBranch', { name: branchName, id })
    }
  }, [userBranches])

  return { $dashboard, ...actions, ...selectors }
})

export const useDashboard = () => DashboardStore()
export const DashboardContext = DashboardStore.Context
export const DashboardProvider = DashboardStore.Provider
