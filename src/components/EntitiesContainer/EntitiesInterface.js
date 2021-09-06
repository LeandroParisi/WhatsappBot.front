import branchesAdapter from './adapters/branches/branchesAdapter'
import branchesEditAdapter from './adapters/branches/branchEntityEdit'
import menusAdapter from './adapters/menus/menusAdapter'
import menusEditAdapter from './adapters/menus/menusEditAdapter'

const entitiesTypes = {
  branches: 'branches',
  menus: 'menus',
}

const entityAdapters = {
  [entitiesTypes.branches]: branchesAdapter,
  [entitiesTypes.menus]: menusAdapter,
}

const editEntityAdapters = {
  [entitiesTypes.branches]: branchesEditAdapter,
  [entitiesTypes.menus]: menusEditAdapter,

}

const entityAdapter = (entity, type) => entityAdapters[type](entity)

const editEntityAdapter = (entity, type) => editEntityAdapters[type](entity)

export { entitiesTypes, entityAdapter, editEntityAdapter }
