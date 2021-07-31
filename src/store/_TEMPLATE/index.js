import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {

}

const TEMPLATE = useCreateStore(() => {
  const [$TEMPLATE, setTEMPLATE] = useState(initialState)
  const actions = storeActions($TEMPLATE, setTEMPLATE, useRoot)
  const selectors = storeSelectors($TEMPLATE)

  useEffect(() => {

  }, [])

  return { $TEMPLATE, ...actions, ...selectors }
})

export const useTEMPLATE = () => TEMPLATE()
export const TEMPLATEContext = TEMPLATE.Context
export const TEMPLATEProvider = TEMPLATE.Provider
