export default ($store, $root) => {
  const getOrders = () => $store.orders

  const getBranchesNames = () => $root.userBranches
    .filter(({ isActive }) => isActive).map(({ branchName, id }) => ({ name: branchName, id }))

  const getUserBranches = () => $root.userBranches

  const getSelectedBranch = () => $store.selectedBranch

  return {
    getOrders, getSelectedBranch, getBranchesNames, getUserBranches,
  }
}
