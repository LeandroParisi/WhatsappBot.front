import branchInterface from 'interfaces/branches/branchesInterface'
// import { validateCep } from 'store/sharedMethods/providers'
import validateCepApi from 'cep-promise'
import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { dayToNumber } from 'interfaces/openingHours/openingHoursInterface'
import { isNotEmpty, isNumber, setNotEmpty } from '../sharedMethods/validations'

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
    return !!fees.length && isNumber(fees)
  }
  if (id === deliveryFeeTypes.radius) {
    if (!fees.length) return false
    return fees.every(([distance, value]) => (
      distance > 0 && value >= 0 && isNumber(distance) && isNumber(value)))
  }
}

// TODO
// const validateOpeningHours = async (openingHours) => {
//   const openingHoursEntries = Object
//     .entries(openingHours)
//     .sort(([a], [b]) => dayToNumber[a] - dayToNumber[b])

//   openingHoursEntries.forEach(([day, currentDay], index) => {
//     const dayAsNumber = dayToNumber[day]

//     const [_nextDay, { hours: nextDayHours }] = dayAsNumber < 7
//       ? openingHoursEntries[index + 1]
//       : openingHoursEntries[openingHoursEntries.length - 1]

//     console.log({ currentDay })
//     console.log({ nextDay })
//   })
//   return true
// }

export const errorsLib = {
  [branchInterface.postalCode]: 'CEP inválido',
  [branchInterface.countryName]: 'Favor selecionar um país',
  [branchInterface.stateName]: 'Favor selecionar um estado',
  [branchInterface.cityName]: 'Favor selecionar uma cidade',
  [branchInterface.deliveryFees]: 'Favor definir ao menos um valor',
  [branchInterface.branchName]: 'Favor definir o nome para a filial',
  [branchInterface.managerName]: 'Favor definir o nome do gerente',
  [branchInterface.neighborhood]: 'Favor definir um bairro',
  [branchInterface.street]: 'Favor definir uma rua',
  [branchInterface.deliveryTypes]: 'Favor definir ao menos um tipo de entrega',
  [branchInterface.paymentMethods]: 'Favor definir ao menos um método de pagamento',
  [branchInterface.streetNumber]: 'Favor definir um número',
}

export const editValidations = {
  [branchInterface.branchName]: (name) => isNotEmpty(name),
  [branchInterface.managerName]: (name) => isNotEmpty(name),

  [branchInterface.countryName]: ({ id }) => id > 0,
  [branchInterface.stateName]: ({ id }) => id > 0,
  [branchInterface.cityName]: ({ id }) => id > 0,
  [branchInterface.postalCode]: validateCep,
  [branchInterface.neighborhood]: (name) => isNotEmpty(name),
  [branchInterface.street]: (name) => isNotEmpty(name),
  [branchInterface.streetNumber]: (name) => isNotEmpty(name),

  [branchInterface.deliveryFees]: validateDeliveryFees,
  // [branchInterface.openingHours]: validateOpeningHours,
}

export const createValidations = {
  ...editValidations,
  [branchInterface.deliveryTypes]: (deliveryType) => setNotEmpty(deliveryType),
  [branchInterface.paymentMethods]: (paymentMethod) => setNotEmpty(paymentMethod),
}
