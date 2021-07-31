export default ($store) => {
  const getOrders = () => $store.orders

  const getSelectedBranch = () => $store.selectedBranch

  return { getOrders, getSelectedBranch }
}
