import branchesAdapter from './adapters/branches/branchEntity'

const entitiesTypes = {
  branches: 'branches',
}

const entityAdapter = {
  [entitiesTypes.branches]: branchesAdapter,
}

const entitiesAdapter = (entities, type) => entities.map((entity) => entityAdapter[type](entity))

export { entitiesTypes, entitiesAdapter }
