import { setState } from 'adminDashboard/store/sharedMethods/actions'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  return {
    setField,
  }
}
