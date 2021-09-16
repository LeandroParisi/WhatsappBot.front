import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userBranches: [],
  // filters: filterInterface,
  query: '',
}

const TEMPLATESTORE = useCreateStore(() => {
  const [$TEMPLATE, setTEMPLATE] = useState(initialState)
  const actions = storeActions($TEMPLATE, setTEMPLATE, useRoot)
  const selectors = storeSelectors($TEMPLATE)

  useEffect(() => {

  }, [])

  return { $TEMPLATE, ...actions, ...selectors }
})

export const useTEMPLATE = () => TEMPLATESTORE()
export const TEMPLATEContext = TEMPLATESTORE.Context
export const TEMPLATEProvider = TEMPLATESTORE.Provider
