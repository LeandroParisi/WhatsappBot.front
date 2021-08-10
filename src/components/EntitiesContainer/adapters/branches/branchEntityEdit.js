import branchInterface from '../../../../interfaces/branches/branchesInterface'

const branchEntityEdit = (branch) => {
  const {
    id,
    branchName,
    cityName,
    countryName,
    managerName,
    neighborhood,
    postalCode,
    stateName,
    street,
    streetComplement,
    deliveryFees,
    deliveryTypes,
    isActive,
    logo,
    paymentMethods,
    streetNumber,
  } = branch

  return {
    id,
    isActive,
    header: [
      {
        value: logo,
        apiKey: branchInterface.logo,
      },
      {
        value: branchName,
        apiKey: branchInterface.branchName,
      },
    ],
    fields: [
      {
        value: managerName,
        apiKey: branchInterface.managerName,
        title: 'Gerente',
      },

      {
        value: street,
        apiKey: branchInterface.street,
        title: 'Rua',
      },
      {
        value: streetNumber,
        apiKey: branchInterface.streetNumber,
        title: 'Número',
      },
      {
        value: streetComplement,
        apiKey: branchInterface.streetComplement,
        title: 'Complemento',
      },
      {
        value: neighborhood,
        apiKey: branchInterface.neighborhood,
        title: 'Bairro',
      },
      {
        value: postalCode,
        apiKey: branchInterface.postalCode,
        title: 'CEP',
      },
      {
        value: cityName,
        apiKey: branchInterface.cityName,
        title: 'Cidade',
      },
      {
        value: stateName,
        apiKey: branchInterface.stateName,
        title: 'Estado',
      },
      {
        value: countryName,
        apiKey: branchInterface.countryName,
        title: 'País',
      },

      {
        value: deliveryFees,
        apiKey: branchInterface.deliveryFees,
        title: 'Taxas de entrega',
      },
      {
        value: deliveryTypes,
        apiKey: branchInterface.deliveryTypes,
        title: 'Tipo de entrega',
      },
      {
        value: paymentMethods,
        apiKey: branchInterface.paymentMethods,
        title: 'Métodos de pagamento',
      },

    ],
  }
}

export default branchEntityEdit
