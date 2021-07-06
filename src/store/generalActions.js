const setState = (setter, field, value) => {
  console.log(field)
  console.log(value)

  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
}

export { setState }
