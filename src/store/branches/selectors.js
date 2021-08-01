export default ($store) => {
  const getTEMPLATE = () => $store

  const getUserBranches = () => $store.userBranches

  const getFilters = () => (
    { filters: $store.filters, validationSchema: $store.validations }
  )

  return { getUserBranches, getFilters }
}
