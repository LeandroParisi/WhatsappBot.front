import { deliveryTypesInterface } from 'interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'interfaces/paymentMethods/methods'
import filterTypes from 'libs/filterTypes'
import branchInterface from '../../../../interfaces/branches/branchesInterface'

const {
  INPUT,
  IMAGE,
  ICONS,
  INPUT_ARRAY,
} = filterTypes

const branchesEditAdapter = (branch) => {
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
        key: branchInterface.logo,
        type: IMAGE,
      },
      {
        value: branchName,
        key: branchInterface.branchName,
        type: INPUT,
      },
    ],
    sections: [
      {
        title: 'Dados Gerais',
        subSections: [
          {
            value: managerName,
            key: branchInterface.managerName,
            sectionName: 'Gerente',
            type: INPUT,
          },
        ],
      },
      {
        title: 'Endereço',
        subSections: [
          {
            value: street,
            key: branchInterface.street,
            sectionName: 'Rua',
            type: INPUT,
          },
          {
            value: streetNumber,
            key: branchInterface.streetNumber,
            sectionName: 'Número',
            type: INPUT,
          },
          {
            value: streetComplement,
            key: branchInterface.streetComplement,
            sectionName: 'Complemento',
            type: INPUT,
          },
          {
            value: neighborhood,
            key: branchInterface.neighborhood,
            sectionName: 'Bairro',
            type: INPUT,
          },
          {
            value: postalCode,
            key: branchInterface.postalCode,
            sectionName: 'CEP',
            type: INPUT,
          },
          {
            value: cityName,
            key: branchInterface.cityName,
            sectionName: 'Cidade',
            type: INPUT,
          },
          {
            value: stateName,
            key: branchInterface.stateName,
            sectionName: 'Estado',
            type: INPUT,
          },
          {
            value: countryName,
            key: branchInterface.countryName,
            sectionName: 'País',
            type: INPUT,
          },
        ],
      },
      {
        title: 'Taxas e opções',
        subSections: [
          {
            value: deliveryFees,
            key: branchInterface.deliveryFees,
            title: 'Taxas de entrega',
            type: ICONS,
            options: INPUT_ARRAY,
          },
          {
            value: deliveryTypes,
            key: branchInterface.deliveryTypes,
            title: 'Tipo de entrega',
            type: ICONS,
            options: deliveryTypesInterface,
          },
          {
            value: paymentMethods,
            key: branchInterface.paymentMethods,
            title: 'Métodos de pagamento',
            type: ICONS,
            options: paymentMethodInterface,
          }],
      },

    ],
  }
}

export default branchesEditAdapter
