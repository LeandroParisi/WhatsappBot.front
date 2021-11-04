import { generalIcons } from 'assets/icons/iconsLib'
import assembleAddress from 'shared/utils/assembleAddress'
import { deliveryFeeInterface, deliveryFeeTranslations } from 'shared/interfaces/deliveryFees/deliveryFeeTypes'
import contentTypes from 'shared/libs/sectionTypes'
import { deliveryTypesInterface } from 'shared/interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'shared/interfaces/paymentMethods/methods'
import { inputTypes, customFieldTypes } from 'shared/libs/inputTypes'
import { countries } from 'shared/libs/countries'
import { brazilianStates } from 'shared/libs/brazilianStates'
import { brazilianCities } from 'shared/libs/brazilianCities'
import branchInterface, { defaultValues } from 'shared/interfaces/branches/branchesInterface'
import { mapDeliveryFees } from './utils'
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

const {
  MANAGER,
  ADDRESS,
  DELIVERY_TYPE,
  DELIVERY_FEE,
  PAYMENT_TYPE,
} = generalIcons

export const editBranchesAdapter = (branch) => {
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

export const branchesAdapter = (branch) => {
  const {
    id,
    branchName,
    logo,
    isActive,
    managerName,
    deliveryTypes,
    paymentMethods,
    deliveryFees: {
      type,
      fees,
    },
  } = branch

  return {
    id,
    name: branchName,
    image: logo,
    isActive,
    sections: [
      {
        icon: MANAGER,
        title: 'Gerente',
        content: {
          values: [managerName],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: ADDRESS,
        title: 'Endereço',
        content: {
          values: [assembleAddress(branch)],
          type: contentTypes.UNIQUE,

        },
      },
      {
        icon: DELIVERY_FEE,
        title: 'Taxas de entrega',
        subTitle: deliveryFeeTranslations[type],
        content: {
          values: mapDeliveryFees(type, fees),
          type: contentTypes.LIST,
        },
      },
      {
        icon: DELIVERY_TYPE,
        title: 'Tipo de entrega',
        content: {
          values: deliveryTypes.map(({ deliveryType }) => deliveryType),
          type: contentTypes.ICONS,
        },
      },
      {
        icon: PAYMENT_TYPE,
        title: 'Métodos de pagamento',
        content: {
          values: paymentMethods.map(({ paymentMethod }) => paymentMethod),
          type: contentTypes.ICONS,
        },
      },
    ],
  }
}

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
