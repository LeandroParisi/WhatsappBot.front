import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import { toast } from 'react-toastify'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'
import { validateEditBody } from './validations'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserMenus = async (query = '') => {
    const { response } = await errorHandler(providers.fetchUserMenus(query))

    if (response) {
      setField('userMenus', response)
    }
  }

  const activateMenu = activateEntityFactory(setField, errorHandler, providers.activateMenu, 'userMenus', store)

  const deactivateMenu = deactivateEntityFactory(setField, errorHandler, providers.activateMenu, 'userMenus', store)

  return {
    setField,
    saveFilters,
    fetchUserMenus,
    activateMenu,
    deactivateMenu,
  }
}
