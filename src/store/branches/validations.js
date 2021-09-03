import branchInterface from 'interfaces/branches/branchesInterface'
// import { validateCep } from 'store/sharedMethods/providers'
import validateCepApi from 'cep-promise'
import formatErrorMessages from 'helpers/formatErrorMessages'
import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { validateHour } from 'utils/validateHour'
import { dayToNumber } from 'interfaces/openingHours/openingHoursInterface'

const validateCep = async (cep) => {
  try {
    await validateCepApi(cep)
    return true
  } catch (error) {
    return false
  }
}

const validateDeliveryFees = async ({ fees, type: { id } }) => {
  if (id === deliveryFeeTypes.unique) {
    return !!fees.length
  }
  if (id === deliveryFeeTypes.radius) {
    if (!fees.length) return false
    return fees.every(([distance, value]) => distance > 0 && value >= 0)
  }
}

const validateOpeningHours = async (openingHours) => {
  const orderedDays = Object.entries(openingHours)
    .sort(([dayOne], [dayTwo]) => dayToNumber[dayOne] - dayToNumber[dayTwo])

  let [, { overnight: previousOvernight }] = orderedDays[orderedDays.length - 1]

  return orderedDays.every(([, { hours: [openHour, closeHour], overnight }]) => {
    if (previousOvernight && closeHour) {
      return true
    }
    previousOvernight = overnight
    if (!openHour && !closeHour) {
      return true
    }
    if (overnight && openHour) {
      return validateHour(openHour)
    }
    if (!openHour || !closeHour) {
      return false
    }
    return true
  })
}

export const errorsLib = {
  [branchInterface.postalCode]: 'CEP inválido',
  [branchInterface.countryName]: 'Favor selecionar um país',
  [branchInterface.stateName]: 'Favor selecionar um estado',
  [branchInterface.cityName]: 'Favor selecionar uma cidade',
  [branchInterface.deliveryFees]: 'Favor definir ao menos um valor',
  [branchInterface.openingHours]: 'Teste',

}

const validations = {
  [branchInterface.countryName]: ({ id }) => id > 0,
  [branchInterface.stateName]: ({ id }) => id > 0,
  [branchInterface.cityName]: ({ id }) => id > 0,
  [branchInterface.postalCode]: validateCep,
  [branchInterface.deliveryFees]: validateDeliveryFees,
  [branchInterface.openingHours]: validateOpeningHours,
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
