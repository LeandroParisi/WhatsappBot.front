export const getOptions = (lib) => Object.entries(lib).map(([id, name]) => ({ id, name }))

export const getInitialSelect = (lib, initialValue) => {
  const [id, name] = Object.entries(lib)
    .find(([, assetName]) => assetName === initialValue)

  return {
    id,
    name,
  }
}
