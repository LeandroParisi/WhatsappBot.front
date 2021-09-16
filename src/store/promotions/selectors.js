import { promotionsAdapter, editPromotionsAdapter } from './serializers'

export default ($store) => {
  // const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedPromotions = () => $store.entities
    .map((entity) => promotionsAdapter(entity))

  const getAdaptedEditPromotions = () => $store.entities
    .map((promotion) => editPromotionsAdapter(promotion, $store.products))

  // const getDefaultEntity = () => editProductsAdapter(
  //   defaultValues,
  //   $store.userMenus,
  //   $store.userBranches,
  //   $store.categories,
  // )

  return {
    getFilters,
    getAdaptedPromotions,
    getAdaptedEditPromotions,
    // getProducts,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    // getDefaultEntity,
  }
}
