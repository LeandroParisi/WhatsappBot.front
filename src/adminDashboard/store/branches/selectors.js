import { branchesAdapter, editBranchesAdapter } from './serializers'

export default ($store) => {
  const getUserBranches = () => $store.userBranches

  const getFilters = () => $store.filters

  const getAdaptedBranches = () => $store.userBranches
    .map((branch) => branchesAdapter(branch))

  const getAdaptedEditBranches = () => $store.userBranches
    .map((branch) => editBranchesAdapter(branch))

  const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getUserBranches, getFilters, getAdaptedBranches, getAdaptedEditBranches, getDefaultEntity,
  }
}
