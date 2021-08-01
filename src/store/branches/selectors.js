export default ($store) => {
  const getTEMPLATE = () => $store

  const getUserBranches = () => $store.userBranches

  return { getUserBranches }
}
