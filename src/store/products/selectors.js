export default ($store) => {
  const getProducts = () => $store.products

  const getFilters = () => $store.filters

  // const getAdaptedBranches = () => $store.userBranches
  //   .map((branch) => branchesAdapter(branch))

  // const getAdaptedEditBranches = () => $store.userBranches
  //   .map((branch) => editBranchesAdapter(branch))

  // const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getProducts, getFilters,
  }
}
