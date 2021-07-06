const setState = (setter) => (field, value) => {
  setter((prev) => ({
    ...prev,
    [field]: value,
  }))
}

const validateInput = (validation, value, setter) => {
  const isValid = validation(value)
  setter((prev) => ({
    ...prev,
    error: !isValid,
  }))
}

export { setState, validateInput }
