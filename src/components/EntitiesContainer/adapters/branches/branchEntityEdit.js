import { deliveryFeeInterface, deliveryFeeTranslations } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { deliveryTypesInterface } from 'interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'interfaces/paymentMethods/methods'
import { inputTypes, customFieldTypes } from 'libs/inputTypes'
import { countries } from 'libs/countries'
import { brazilianStates } from 'libs/brazilianStates'
import { brazilianCities } from 'libs/brazilianCities'
import branchInterface, { defaultValues } from '../../../../interfaces/branches/branchesInterface'
import { getOptions, getInitialSelect } from './helpers'

const {
  INPUT,
  IMAGE,
  ICONS,
  SELECT,
} = inputTypes

const {
  DELIVERY_FEES,
  OPENING_HOURS,
  CITIES,
} = customFieldTypes

const branchesEditAdapter = (branch) => {
  const {
    id = defaultValues.id,
    branchName = defaultValues.branchName,
    cityName = defaultValues.cityName,
    countryName = defaultValues.countryName,
    managerName = defaultValues.managerName,
    neighborhood = defaultValues.neighborhood,
    postalCode = defaultValues.postalCode,
    stateName = defaultValues.stateName,
    street = defaultValues.street,
    streetComplement = defaultValues.streetComplement,
    deliveryFees = defaultValues.deliveryFees,
    deliveryTypes = defaultValues.deliveryTypes,
    isActive = defaultValues.isActive,
    logo = defaultValues.logo,
    paymentMethods = defaultValues.paymentMethods,
    streetNumber = defaultValues.streetNumber,
    openingHours = defaultValues.openingHours,
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
          {
            value: openingHours,
            key: branchInterface.openingHours,
            sectionName: 'Horários de funcionamento',
            customField: OPENING_HOURS,
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
            value: getInitialSelect(countries, countryName),
            key: branchInterface.countryName,
            sectionName: 'País',
            fieldType: SELECT,
            options: getOptions(countries),
          },
          {
            value: getInitialSelect(brazilianStates, stateName),
            key: branchInterface.stateName,
            sectionName: 'Estado',
            fieldType: SELECT,
            options: getOptions(brazilianStates),
          },
          {
            value: getInitialSelect(brazilianCities[stateName], cityName),
            key: branchInterface.cityName,
            sectionName: 'Cidade',
            customField: CITIES,
            statesKey: branchInterface.stateName,
          },
        ],
      },
      {
        title: 'Taxas e opções',
        subSections: [
          {
            value: {
              ...deliveryFees,
              type: {
                id: deliveryFees.type,
                name: deliveryFeeTranslations[deliveryFees.type],
              },
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
