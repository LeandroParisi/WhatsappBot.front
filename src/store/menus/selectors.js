import { editMenusAdapter, menusAdapter } from './serializers'

export default ($store) => {
  const getTEMPLATE = () => $store

  const getMenus = () => $store.userMenus

  const getFilters = () => $store.filters

  const getAdaptedMenus = () => $store.userMenus
    .map((menu) => menusAdapter(menu))

  const getAdaptedEditMenus = () => $store.userMenus
    .map((menu) => editMenusAdapter(menu))

  // const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getMenus,
    getFilters,
    getAdaptedMenus,
    getAdaptedEditMenus,
  }
}
