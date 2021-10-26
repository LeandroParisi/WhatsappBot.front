import { defaultValues } from 'interfaces/products/productsInterface'
import { productsAdapter, editProductsAdapter } from './serializers'

export default ($store, $root) => {
  const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedProducts = () => $store.products
    .map((product) => productsAdapter(product))

  const getAdaptedEditProducts = () => $store.products
    .map((branch) => editProductsAdapter(
      branch,
      $store.userMenus,
      $root.userBranches,
      $store.categories,
    ))

  const getDefaultEntity = () => editProductsAdapter(
    defaultValues,
    $store.userMenus,
    $root.userBranches,
    $store.categories,
  )

  return {
    getProducts, getFilters, getAdaptedProducts, getAdaptedEditProducts, getDefaultEntity,
  }
}
