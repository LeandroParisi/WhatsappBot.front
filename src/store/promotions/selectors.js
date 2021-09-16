import { promotionsAdapter } from './serializers'

export default ($store) => {
  // const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedPromotions = () => $store.entities
    .map((entity) => promotionsAdapter(entity))

  // const getAdaptedEditProducts = () => $store.products
  //   .map((branch) => editProductsAdapter(
  //     branch,
  //     $store.userMenus,
  //     $store.userBranches,
  //     $store.categories,
  //   ))

  // const getDefaultEntity = () => editProductsAdapter(
  //   defaultValues,
  //   $store.userMenus,
  //   $store.userBranches,
  //   $store.categories,
  // )

  return {
    getFilters,
    getAdaptedPromotions,
    // getProducts,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    // getDefaultEntity,
  }
}
