export default ($store) => {
  const getBranchesNames = () => $store.branches
    .map(({ branchName, id }) => ({ name: branchName, id }))

  return { getBranchesNames }
}
