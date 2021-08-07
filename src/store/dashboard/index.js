import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  orders: {
    dispatched: [],
    inProduction: [],
    placed: [],
    readyToDeliver: [],
    toDo: [],
  },
  userBranches: [],
  selectedBranch: { name: '', id: '' },
}

const DashboardStore = useCreateStore(() => {
  const [$dashboard, setDashboard] = useState(initialState)
  const actions = storeActions($dashboard, setDashboard, useRoot)
  const selectors = storeSelectors($dashboard)

  const { selectedBranch, userBranches } = $dashboard

  useEffect(() => {
    if (selectedBranch.name) {
      actions.fetchBranchOrders({
        branchId: selectedBranch.id, status: '!fullfilled',
      })
    }
  }, [selectedBranch.name])

  useEffect(() => {
    actions.fetchUserBranches()
  }, [])

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
