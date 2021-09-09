import { saveFiltersFactory, setState } from 'store/sharedMethods/actions'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  return {
    setField,
    saveFilters,
  }
}
