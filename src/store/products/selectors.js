import { productsAdapter, editProductsAdapter } from './serializers'

export default ($store) => {
  const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedProducts = () => $store.products
    .map((product) => productsAdapter(product))

  const getAdaptedEditProducts = () => $store.products
    .map((branch) => editProductsAdapter(branch, $store.userMenus, $store.userBranches))

  // const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getProducts, getFilters, getAdaptedProducts, getAdaptedEditProducts,
  }
}
