export default ($store) => {
  const getBranchesNames = () => $store.userBranches
    .map(({ branchName, id }) => ({ name: branchName, id }))

  const getUserBranches = () => $store.userBranches

  return { getUserBranches, getBranchesNames }
}
