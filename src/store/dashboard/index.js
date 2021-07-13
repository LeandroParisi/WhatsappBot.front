import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  branches: [],
  orders: [],
  selectedBranch: { name: '', id: '' },
}

const DashboardStore = useCreateStore(() => {
  const [$dashboard, setDashboard] = useState(initialState)
  const actions = storeActions(setDashboard, useRoot)
  const selectors = storeSelectors($dashboard)

  const { selectedBranch } = $dashboard

  useEffect(() => {
    if (selectedBranch.name) {
      console.log('fetch orders')
      actions.fetchBranchOrders({ branchId: selectedBranch.id })
    }
  }, [selectedBranch.name])

  return { $dashboard, ...actions, ...selectors }
})

export const useDashboard = () => DashboardStore()
export const DashboardContext = DashboardStore.Context
export const DashboardProvider = DashboardStore.Provider
