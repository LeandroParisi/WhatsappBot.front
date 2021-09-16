/* eslint-disable no-shadow */
import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'
import formatPrice from 'utils/formatPrice'
import {
  dayToNumber,
  dayTranslation,
} from 'interfaces/openingHours/openingHoursInterface'
import promotionsInterface from 'interfaces/promotions/promotionsInterface'
import { customFieldTypes, inputTypes } from 'libs/inputTypes'
import { formatDate } from 'utils/formatDate'

const {
  PRICE,
  PRODUCT,
  CALENDAR,
  CALENDAR_CHECK,
  STORE,
} = groupedIcons

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
    branchPromotions,
  } = promotion

  console.log({ branchPromotions })

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
          values: ['TRANSFORMAR EM MANY TO MANY'],
          type: contentTypes.LIST,
        },
      },
    ],
  }
}

export const editPromotionsAdapter = (promotion, products) => {
  const {
    id,
    name,
    totalPrice,
    isActive,
    avaiability,
    dueDate,
    image,
    promotionProducts,
    branchPromotions,
  } = promotion

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
            value: promotionProducts?.map(({ id, name }) => ({ id, name })),
            options: products?.map(({ id, name }) => ({ id, name })),
            key: promotionsInterface.promotionProducts,
            sectionName: 'Produtos',
            fieldType: SELECT_LIST,
          },
        ],
      },
    ],
  }
}

export const normalizeEditPayload = (body) => {

}
