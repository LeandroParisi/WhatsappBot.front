import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  branches: [],
  orders: {
    dispatched: [],
    inProduction: [],
    placed: [],
    readyToDeliver: [],
    toDo: [],
  },
  selectedBranch: { name: '', id: '' },
}

const DashboardStore = useCreateStore(() => {
  const [$dashboard, setDashboard] = useState(initialState)
  const actions = storeActions(setDashboard, useRoot)
  const selectors = storeSelectors($dashboard)

  const { selectedBranch } = $dashboard

  useEffect(() => {
    if (selectedBranch.name) {
      actions.fetchBranchOrders({
        branchId: selectedBranch.id, status: '!fullfilled',
      })
    }
  }, [selectedBranch.name])

  return { $dashboard, ...actions, ...selectors }
})

export const useDashboard = () => DashboardStore()
export const DashboardContext = DashboardStore.Context
export const DashboardProvider = DashboardStore.Provider
