/* eslint-disable no-shadow */
import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'
import formatPrice from 'shared/utils/formatPrice'
import formatPercentage from 'shared/utils/formatPercentage'
import {
  dayToNumber,
  dayTranslation,
} from 'shared/interfaces/openingHours/openingHoursInterface'
import couponsInterface, { discountType, conditions } from 'shared/interfaces/coupons/couponsInterface'
import { customFieldTypes, inputTypes } from 'libs/inputTypes'
import { formatDate } from 'shared/utils/formatDate'
import { formatDiscount, extractProductsCaracteristics, formatConditions } from './utils'

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
  ICONS,
  INPUT_LIST,
  DATE,
} = inputTypes

// const formatOption = ({ name, price }) => `${capitalize(name)}: + ${formatPrice(price)}`

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
    [conditions.price_limit]: priceLimit,
    [conditions.date_limit]: dateLimit,
    [conditions.distance_limit]: distanceLimit,
    [conditions.uses_limit]: usesLimit,
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

export const editEntityAdapter = (coupom, userProducts, userBranches) => {
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

    ],
  }
}

export const normalizeEditPayload = (body) => {
  const {
    avaiability, branchesPromotions, promotionProducts,
  } = body

  return {
    ...body,
    avaiability: avaiability.map(({ id }) => Number(id)),
    branchesPromotions: branchesPromotions.map(({ id }) => id),
    promotionProducts: promotionProducts
      .map(({ productId, attributes }) => ({ productId, attributes })),
  }
}
