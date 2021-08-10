import branchesAdapter from './adapters/branches/branchEntity'
import branchesEditAdapter from './adapters/branches/branchEntityEdit'

const entitiesTypes = {
  branches: 'branches',
}

const entityAdapters = {
  [entitiesTypes.branches]: branchesAdapter,
}

const editEntityAdapters = {
  [entitiesTypes.branches]: branchesEditAdapter,

}

const entityAdapter = (entity, type) => entityAdapters[type](entity)

const editEntityAdapter = (entity, type) => editEntityAdapters[type](entity)

export { entitiesTypes, entityAdapter, editEntityAdapter }
