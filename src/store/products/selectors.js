import { productsAdapter } from './serializers'

export default ($store) => {
  const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedProducts = () => $store.products
    .map((product) => productsAdapter(product))

  // const getAdaptedEditBranches = () => $store.userBranches
  //   .map((branch) => editBranchesAdapter(branch))

  // const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getProducts, getFilters, getAdaptedProducts,
  }
}
