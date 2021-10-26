import { editMenusAdapter, menusAdapter } from './serializers'

export default ($store, $root) => {
  const getMenus = () => $store.userMenus

  const getFilters = () => $store.filters

  const getAdaptedMenus = () => $store.userMenus
    .map((menu) => menusAdapter(menu))

  const getAdaptedEditMenus = () => $store.userMenus
    .map((menu) => editMenusAdapter(menu, $root.userProducts, $root.userBranches))

  const getDefaultEntity = () => editMenusAdapter({}, $root.userProducts, $root.userBranches)

  return {
    getMenus,
    getFilters,
    getAdaptedMenus,
    getAdaptedEditMenus,
    getDefaultEntity,
  }
}
