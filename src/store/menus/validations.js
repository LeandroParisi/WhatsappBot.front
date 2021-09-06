import branchInterface from 'interfaces/branches/branchesInterface'
// import { validateCep } from 'store/sharedMethods/providers'
import validateCepApi from 'cep-promise'
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

export const errorsLib = {
  [branchInterface.postalCode]: 'CEP inválido',
  [branchInterface.countryName]: 'Favor selecionar um país',
  [branchInterface.stateName]: 'Favor selecionar um estado',
  [branchInterface.cityName]: 'Favor selecionar uma cidade',
  [branchInterface.deliveryFees]: 'Favor definir ao menos um valor',

}

export const validations = {
  [branchInterface.countryName]: ({ id }) => id > 0,
  [branchInterface.stateName]: ({ id }) => id > 0,
  [branchInterface.cityName]: ({ id }) => id > 0,
  [branchInterface.postalCode]: validateCep,
  [branchInterface.deliveryFees]: validateDeliveryFees,
}
