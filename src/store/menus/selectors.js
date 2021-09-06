export default ($store) => {
  const getTEMPLATE = () => $store

  const getMenus = () => $store.userMenus

  const getFilters = () => $store.filters

  return { getMenus, getFilters }
}
