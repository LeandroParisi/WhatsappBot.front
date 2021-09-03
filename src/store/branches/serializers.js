import branchInterface from 'interfaces/branches/branchesInterface'

export const normalizeEditPayload = (branch) => {
  const {
    deliveryFees: { fees, type: { id } },
    deliveryTypes,
    paymentMethods,
    countryName,
    stateName,
    cityName,
  } = branch

  const normalizedBranch = {
    ...branch,
    deliveryFees: {
      fees,
      type: id,
    },
    deliveryTypes: [...deliveryTypes],
    paymentMethods: [...paymentMethods],
    [branchInterface.countryId]: +countryName.id,
    [branchInterface.stateId]: +stateName.id,
    [branchInterface.cityId]: +cityName.id,
  }

  delete normalizedBranch.countryName
  delete normalizedBranch.stateName
  delete normalizedBranch.cityName

  return normalizedBranch
}

export const teste = 0
