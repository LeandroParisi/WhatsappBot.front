import branchesAdapter from './adapters/branchesAdapter'

const entitiesTypes = {
  branches: 'branches',
}

const adapters = {
  [entitiesTypes.branches]: branchesAdapter,
}

const entitiesAdapter = (entities, type) => entities.map((entity) => adapters[type](entity))

export { entitiesTypes, entitiesAdapter }
