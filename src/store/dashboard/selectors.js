export default ($store) => {
  const getOrders = () => $store.orders

  const getBranchesNames = () => $store.userBranches
    .map(({ branchName, id }) => ({ name: branchName, id }))

  const getUserBranches = () => $store.userBranches

  const getSelectedBranch = () => $store.selectedBranch

  return {
    getOrders, getSelectedBranch, getBranchesNames, getUserBranches,
  }
}
