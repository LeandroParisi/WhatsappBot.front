import { defaultValues } from 'shared/interfaces/promotions/promotionsInterface'
import { promotionsAdapter, editPromotionsAdapter } from './serializers'

export default ($store, $root) => {
  const getFilters = () => $store.filters

  const getAdaptedPromotions = () => $store.entities
    .map((entity) => promotionsAdapter(entity))

  const getAdaptedEditPromotions = () => $store.entities
    .map((promotion) => editPromotionsAdapter(promotion, $root.userProducts, $root.userBranches))

  const getDefaultEntity = () => editPromotionsAdapter(
    defaultValues,
    $root.userProducts,
    $root.userBranches,
  )

  return {
    getFilters,
    getAdaptedPromotions,
    getAdaptedEditPromotions,
    getDefaultEntity,
  }
}
