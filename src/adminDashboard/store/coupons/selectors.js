import { defaultValues } from 'shared/interfaces/coupons/couponsInterface'
import { MAIN_FIELD } from './config'
import { entityAdapter, editEntityAdapter } from './serializers'

export default ($store, $root) => {
  // const getProducts = () => $store.products

  const getFilters = () => $store.filters

  const getAdaptedEntities = () => $store[MAIN_FIELD]
    .map((entity) => entityAdapter(entity))

  const getAdaptedEditEntities = () => $store[MAIN_FIELD]
    .map((entity) => editEntityAdapter(entity, $root.userBranches, $store.conditions))

  const getDefaultEntity = () => editEntityAdapter(
    defaultValues,
    $root.userBranches,
    $store.conditions,
  )

  return {
    getFilters,
    getAdaptedEntities,
    getAdaptedEditEntities,
    getDefaultEntity,
  }
}
