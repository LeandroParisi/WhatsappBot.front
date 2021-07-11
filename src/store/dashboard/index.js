import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import userActions from './actions'
import userSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  branches: [],
  selectedBranch: { name: '', id: '' },
}

const DashboardStore = useCreateStore(() => {
  const [$dashboard, setDashboard] = useState(initialState)
  const actions = userActions(setDashboard, useRoot)
  const selectors = userSelectors($dashboard)

  const { selectedBranch } = $dashboard

  useEffect(() => {
    if (selectedBranch.name) {
      console.log('fetch orders')
    }
  }, [selectedBranch])

  return { $dashboard, ...actions, ...selectors }
})

export const useDashboard = () => DashboardStore()
export const DashboardContext = DashboardStore.Context
export const DashboardProvider = DashboardStore.Provider
