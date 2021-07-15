export default ($store) => {
  const getBranchesNames = () => $store.branches
    .map(({ branchName, id }) => ({ name: branchName, id }))

  const getOrders = () => $store.orders

  return { getBranchesNames, getOrders }
}
