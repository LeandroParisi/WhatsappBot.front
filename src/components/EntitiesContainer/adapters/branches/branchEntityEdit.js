import { deliveryFeeInterface, deliveryFeeTranslations } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { deliveryTypesInterface } from 'interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'interfaces/paymentMethods/methods'
import { inputTypes, customFieldTypes } from 'libs/inputTypes'
import branchInterface from '../../../../interfaces/branches/branchesInterface'

const {
  INPUT,
  IMAGE,
  ICONS,
  INPUT_ARRAY,
} = inputTypes

const {
  DELIVERY_FEES,
} = customFieldTypes

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
        fieldType: IMAGE,
      },
      {
        value: branchName,
        key: branchInterface.branchName,
        fieldType: INPUT,
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
            fieldType: INPUT,
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
            fieldType: INPUT,
          },
          {
            value: streetNumber,
            key: branchInterface.streetNumber,
            sectionName: 'Número',
            fieldType: INPUT,
          },
          {
            value: streetComplement,
            key: branchInterface.streetComplement,
            sectionName: 'Complemento',
            fieldType: INPUT,
          },
          {
            value: neighborhood,
            key: branchInterface.neighborhood,
            sectionName: 'Bairro',
            fieldType: INPUT,
          },
          {
            value: postalCode,
            key: branchInterface.postalCode,
            sectionName: 'CEP',
            fieldType: INPUT,
          },
          {
            value: cityName,
            key: branchInterface.cityName,
            sectionName: 'Cidade',
            fieldType: INPUT,
          },
          {
            value: stateName,
            key: branchInterface.stateName,
            sectionName: 'Estado',
            fieldType: INPUT,
          },
          {
            value: countryName,
            key: branchInterface.countryName,
            sectionName: 'País',
            fieldType: INPUT,
          },
        ],
      },
      {
        title: 'Taxas e opções',
        subSections: [
          {
            value: {
              ...deliveryFees,
              type: { id: deliveryFees.type, name: deliveryFeeTranslations[deliveryFees.type] },
            },
            key: branchInterface.deliveryFees,
            sectionName: 'Taxas de entrega',
            customField: DELIVERY_FEES,
            options: deliveryFeeInterface,
          },
          {
            value: deliveryTypes,
            key: branchInterface.deliveryTypes,
            sectionName: 'Tipo de entrega',
            fieldType: ICONS,
            options: deliveryTypesInterface,
          },
          {
            value: paymentMethods,
            key: branchInterface.paymentMethods,
            sectionName: 'Métodos de pagamento',
            fieldType: ICONS,
            options: paymentMethodInterface,
          }],
      },

    ],
  }
}

export default branchesEditAdapter
