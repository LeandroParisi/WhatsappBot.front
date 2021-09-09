import { editMenusAdapter, menusAdapter } from './serializers'

export default ($store) => {
  const getMenus = () => $store.userMenus

  const getFilters = () => $store.filters

  const getAdaptedMenus = () => $store.userMenus
    .map((menu) => menusAdapter(menu))

  const getAdaptedEditMenus = () => $store.userMenus
    .map((menu) => editMenusAdapter(menu, $store.userProducts, $store.userBranches))

  const getDefaultEntity = () => editMenusAdapter({}, $store.userProducts, $store.userBranches)

  return {
    getMenus,
    getFilters,
    getAdaptedMenus,
    getAdaptedEditMenus,
    getDefaultEntity,
  }
}
