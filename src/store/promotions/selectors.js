import { defaultValues } from 'interfaces/promotions/promotionsInterface'
import { promotionsAdapter, editPromotionsAdapter } from './serializers'

export default ($store) => {
  // const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedPromotions = () => $store.entities
    .map((entity) => promotionsAdapter(entity))

  const getAdaptedEditPromotions = () => $store.entities
    .map((promotion) => editPromotionsAdapter(promotion, $store.userProducts, $store.userBranches))

  const getDefaultEntity = () => editPromotionsAdapter(
    defaultValues,
    $store.userProducts,
    $store.userBranches,
  )

  return {
    getFilters,
    getAdaptedPromotions,
    getAdaptedEditPromotions,
    // getProducts,
    // getAdaptedProducts,
    // getAdaptedEditProducts,
    getDefaultEntity,
  }
}
