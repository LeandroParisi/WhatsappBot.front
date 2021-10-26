import { defaultValues } from 'interfaces/promotions/promotionsInterface'
import { MAIN_FIELD } from './config'
import { entityAdapter, editEntityAdapter } from './serializers'

export default ($store) => {
  // const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedEntities = () => $store[MAIN_FIELD]
    .map((entity) => entityAdapter(entity))

  const getAdaptedEditEntities = () => $store[MAIN_FIELD]
    .map((entity) => editEntityAdapter(entity, $store.userProducts, $store.userBranches))

  const getDefaultEntity = () => editEntityAdapter(
    defaultValues,
    $store.userProducts,
    $store.userBranches,
  )

  return {
    getFilters,
    getAdaptedEntities,
    getAdaptedEditEntities,
    getDefaultEntity,
  }
}
