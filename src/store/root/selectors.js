export default ($store) => {
  const getIsLoading = () => $store.isLoading

  return { getIsLoading }
}
