import branchInterface from 'interfaces/branches/branchesInterface'

export const errorsLib = {
  [branchInterface.id]: '',
  [branchInterface.branchName]: '',
  [branchInterface.cityName]: '',
  [branchInterface.countryName]: '',
  [branchInterface.createdAt]: '',
  [branchInterface.deliveryType]: '',
  [branchInterface.managerName]: '',
  [branchInterface.neighborhood]: '',
  [branchInterface.postalCode]: '',
  [branchInterface.stateName]: '',
  [branchInterface.street]: '',
  [branchInterface.streetComplement]: '',
  [branchInterface.deliveryFees]: '',
  [branchInterface.deliveryTypes]: '',
  [branchInterface.isActive]: '',
  [branchInterface.logo]: '',
  [branchInterface.paymentMethods]: '',
  [branchInterface.streetNumber]: '',
  [branchInterface.openingHours]: '',
}

export const validateEditBody = (body) => {
  console.log(body)
}
