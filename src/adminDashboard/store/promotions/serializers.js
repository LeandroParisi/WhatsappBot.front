/* eslint-disable no-shadow */
import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'shared/libs/sectionTypes'
import formatPrice from 'shared/utils/formatPrice'
import {
  dayToNumber,
  dayTranslation,
} from 'shared/interfaces/openingHours/openingHoursInterface'
import promotionsInterface from 'shared/interfaces/promotions/promotionsInterface'
import { customFieldTypes, inputTypes } from 'shared/libs/inputTypes'
import { formatDate } from 'shared/utils/formatDate'
import { extractProductsCaracteristics } from './utils'

const {
  PRICE,
  PRODUCT,
  CALENDAR,
  CALENDAR_CHECK,
  STORE,
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

export const promotionsAdapter = (promotion) => {
  const {
    id,
    name,
    totalPrice,
    isActive,
    avaiability,
    dueDate,
    image,
    promotionProducts,
    branchesPromotions,
  } = promotion

  return {
    id,
    name,
    image,
    isActive,
    sections: [
      {
        icon: PRICE,
        title: 'Preço',
        content: {
          values: [formatPrice(totalPrice, true)],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: PRODUCT,
        title: 'Produtos',
        content: {
          values: promotionProducts?.map((product) => product.name),
          type: contentTypes.LIST,
        },
      },
      {
        icon: CALENDAR,
        title: 'Disponibilidade',
        content: {
          values: avaiability.length ? avaiability.map((a) => dayTranslation[a]) : ['Indisponível'],
          type: contentTypes.LIST,
        },
      },
      {
        icon: CALENDAR_CHECK,
        title: 'Data limite',
        content: {
          values: dueDate ? [formatDate(dueDate)] : ['Indefinidamente'],
          type: contentTypes.UNIQUE,
        },
      },

      {
        icon: STORE,
        title: 'Filiais',
        content: {
          values: branchesPromotions.map(({ branchName }) => branchName),
          type: contentTypes.LIST,
        },
      },
    ],
  }
}

export const editPromotionsAdapter = (promotion, userProducts, userBranches) => {
  const {
    id,
    name,
    totalPrice,
    isActive,
    avaiability,
    dueDate,
    image,
    promotionProducts,
    branchesPromotions,
  } = promotion

  let promotionProductTempId = 1

  return {
    id,
    isActive,
    header: [
      {
        value: image,
        key: promotionsInterface.image,
        fieldType: IMAGE,
      },
      {
        value: name,
        key: promotionsInterface.name,
        fieldType: INPUT,
      },
    ],
    sections: [
      {
        title: 'Dados Gerais',
        subSections: [
          {
            value: totalPrice,
            key: promotionsInterface.totalPrice,
            sectionName: 'Preço',
            fieldType: INPUT,
          },
          {
            value: avaiability?.map((day) => ({ id: day.toString(), name: dayTranslation[day] })),
            options: Object.entries(dayTranslation).map(([id, name]) => ({ id, name })),
            key: promotionsInterface.avaiability,
            sectionName: 'Disponibilidade',
            fieldType: SELECT_LIST,
          },
          {
            value: dueDate,
            key: promotionsInterface.dueDate,
            sectionName: 'Data limite',
            fieldType: DATE,
          },
        ],
      },
      {
        title: 'Relações',
        subSections: [
          {
            value: promotionProducts?.map((product) => {
              const temporaryId = promotionProductTempId++

              return {
                ...product,
                temporaryId,
              }
            }),
            options: userProducts?.map(({ id, name, attributes }) => ({ id, name, attributes })),
            key: promotionsInterface.promotionProducts,
            sectionName: 'Produtos',
            customField: PROMOTION_PRODUCTS,
          },
          {
            value: branchesPromotions.map(({ id, branchName }) => ({ id, name: branchName })),
            options: userBranches.map(({ id, branchName }) => ({ id, name: branchName })),
            key: promotionsInterface.branchesPromotions,
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
