import branchInterface from 'interfaces/branches/branchesInterface'
// import { validateCep } from 'store/sharedMethods/providers'
import validateCepApi from 'cep-promise'
import formatErrorMessages from 'helpers/formatErrorMessages'

const validateCep = async (cep) => {
  try {
    await validateCepApi(cep)
    return true
  } catch (error) {
    return false
  }
}

export const errorsLib = {
  [branchInterface.postalCode]: 'CEP inválido',
  [branchInterface.countryName]: 'Favor selecionar um país',
  [branchInterface.stateName]: 'Favor selecionar um estado',
  [branchInterface.cityName]: 'Favor selecionar uma cidade',
}

const validations = {
  [branchInterface.countryName]: ({ id }) => id > 0,
  [branchInterface.stateName]: ({ id }) => id > 0,
  [branchInterface.cityName]: ({ id }) => id > 0,
  [branchInterface.postalCode]: validateCep,
}

// deliveryFees: {fees: Array(3), type: 'radius'}
// deliveryTypes: (2) [1, 2]
// openingHours: {monday: {…}, thursday: {…}, wednesday: {…}, tuesday: {…}, friday: {…}, …}
// paymentMethods: (2) [1, 2]

export const validateEditBody = async (body) => {
  const errors = {}

  const validationsArray = Object.entries(validations)

  const validationResults = await Promise.all(
    validationsArray.map(([key, validation]) => validation(body[key])),
  )

  validationResults.forEach((isValid, index) => {
    if (!isValid) {
      const [key] = validationsArray[index]
      errors[key] = formatErrorMessages(errorsLib[key])
    }
  })

  if (Object.keys(errors).length) {
    return { hasErrors: true, errors }
  }

  return { hasErrors: false }
}
