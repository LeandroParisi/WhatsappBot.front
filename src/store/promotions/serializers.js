import { getIcon, groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'
import formatPrice from 'utils/formatPrice'
import capitalize from 'utils/capitalize'
import {
  dayToNumber,
  dayTranslation,
} from 'interfaces/openingHours/openingHoursInterface'
import promotionsInterface from 'interfaces/promotions/promotionsInterface'
import { customFieldTypes, inputTypes } from 'libs/inputTypes'
import { Select } from 'components'
import { formatDate } from 'utils/formatDate'

const {
  LIST,
  DESCRIPTION,
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
        icon: PRODUCT,
        title: 'Produtos',
        content: {
          values: promotionProducts?.map((product) => product.name),
          type: contentTypes.LIST,
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

export const editPromotionsAdapter = (product, userMenus, userBranches, categories) => {

}

export const normalizeEditPayload = (body) => {

}
