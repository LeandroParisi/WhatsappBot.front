/* eslint-disable no-shadow */
import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'shared/libs/sectionTypes'
import formatPrice from 'shared/utils/formatPrice'
import formatPercentage from 'shared/utils/formatPercentage'
import {
  dayToNumber,
  dayTranslation,
} from 'shared/interfaces/openingHours/openingHoursInterface'
import couponsInterface, { discountType, conditionsInterface, discountTypesInterface } from 'shared/interfaces/coupons/couponsInterface'
import { customFieldTypes, inputTypes } from 'shared/libs/inputTypes'
import { formatDate } from 'shared/utils/formatDate'
import {
  formatDiscount, extractProductsCaracteristics, formatConditions, checkConditionExists,
} from './utils'

const {
  PRICE,
  PRODUCT,
  CALENDAR,
  CALENDAR_CHECK,
  STORE,
  COUNTER,
  CONDITIONS,
} = groupedIcons

const {
  PROMOTION_PRODUCTS,
} = customFieldTypes

const {
  INPUT,
  IMAGE,
  SELECT_LIST,
  SELECT,
  ICONS,
  INPUT_LIST,
  DATE,
  NUMBER,
} = inputTypes

export const entityAdapter = (coupom) => {
  const {
    id,
    coupomCode,
    coupomBranches,
    coupomConditions,
    discountType,
    discount,
    used,
    priceLimit,
    dateLimit,
    distanceLimit,
    usesLimit,
    isActive,
  } = coupom

  const conditionsLimits = {
    [conditionsInterface.price_limit]: priceLimit,
    [conditionsInterface.date_limit]: dateLimit,
    [conditionsInterface.distance_limit]: distanceLimit,
    [conditionsInterface.uses_limit]: usesLimit,
  }

  return {
    id,
    name: coupomCode,
    image: null,
    isActive,
    sections: [
      {
        icon: PRICE,
        title: 'Desconto',
        content: {
          values: [formatDiscount(discount, discountType)],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: CONDITIONS,
        title: 'Condições',
        content: {
          values: formatConditions(coupomConditions, conditionsLimits),
          type: contentTypes.LIST,
        },
      },
      {
        icon: COUNTER,
        title: 'Quantidade de usos',
        content: {
          values: [used],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: STORE,
        title: 'Filiais',
        content: {
          values: coupomBranches.map(({ branchName }) => branchName),
          type: contentTypes.LIST,
        },
      },

    ],
  }
}

export const editEntityAdapter = (coupom, userBranches, conditions) => {
  const {
    id,
    coupomCode,
    coupomBranches,
    coupomConditions,
    discountType,
    discount,
    priceLimit,
    dateLimit,
    distanceLimit,
    usesLimit,
    isActive,
  } = coupom

  return {
    id,
    isActive,
    header: [
      {
        value: null,
        key: couponsInterface.image,
        fieldType: IMAGE,
      },
      {
        value: coupomCode,
        key: couponsInterface.coupomCode,
        fieldType: INPUT,
      },
    ],
    sections: [
      {
        title: 'Condições',
        subSections: [
          {
            value: coupomConditions,
            key: couponsInterface.coupomConditions,
            sectionName: 'Tipo do limite',
            fieldType: ICONS,
            options: conditions,
          },
          {
            value: discountTypesInterface.find((dti) => dti.payloadValue === discountType),
            key: couponsInterface.discountType,
            sectionName: 'Tipo do desconto',
            fieldType: SELECT,
            options: discountTypesInterface,
          },
        ],
      },
      {
        title: 'Limites das condições',
        subSections: [
          {
            value: priceLimit,
            key: couponsInterface.priceLimit,
            sectionName: 'Valor',
            fieldType: NUMBER,
            isDisabled:
              (store) => !checkConditionExists(conditions, conditionsInterface.price_limit)(store),
          },
          {
            value: usesLimit,
            key: couponsInterface.usesLimit,
            sectionName: 'Usos',
            fieldType: NUMBER,
            isDisabled:
              (store) => !checkConditionExists(conditions, conditionsInterface.uses_limit)(store),
          },
          {
            value: dateLimit,
            key: couponsInterface.dateLimit,
            sectionName: 'Data',
            fieldType: DATE,
            isDisabled:
              (store) => !checkConditionExists(conditions, conditionsInterface.date_limit)(store),
          },
          {
            value: distanceLimit,
            key: couponsInterface.distanceLimit,
            sectionName: 'Distância (KM)',
            fieldType: NUMBER,
            isDisabled:
              (store) => (
                !checkConditionExists(conditions, conditionsInterface.distance_limit)(store)),
          },
          {
            value: discount,
            key: couponsInterface.discount,
            sectionName: 'Valor do desconto',
            fieldType: NUMBER,
          },
        ],
      },
      {
        title: 'Relações',
        subSections: [
          {
            value: coupomBranches.map(({ id, branchName }) => ({ id, name: branchName })),
            options: userBranches.map(({ id, branchName }) => ({ id, name: branchName })),
            key: couponsInterface.coupomBranches,
            sectionName: 'Filiais',
            fieldType: SELECT_LIST,
          },
        ],
      },
    ],
  }
}

export const normalizeEditPayload = (body) => {
  const {
    coupomCode,
    discountType,
    coupomConditions,
    coupomBranches,
  } = body

  return {
    ...body,
    discountType: discountType.payloadValue,
    coupomCode: coupomCode.trim(),
    coupomConditions: [...coupomConditions],
    coupomBranches: coupomBranches.map(({ id }) => id),
  }
}
