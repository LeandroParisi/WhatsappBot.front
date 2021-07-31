import { setState } from 'store/generalActions'
import * as providers from './provider'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  return {
    setField,
  }
}
