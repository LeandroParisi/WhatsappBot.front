import { getIcon, groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'
import formatPrice from 'utils/formatPrice'
import capitalize from 'utils/capitalize'
import {
  dayTranslation,
} from 'interfaces/openingHours/openingHoursInterface'
import { attributesTranslation, categories } from 'interfaces/products/productsInterface'

const {
  LIST,
  DESCRIPTION,
  PRICE,
  CALENDAR,
} = groupedIcons

const formatOption = ({ name, price }) => `${capitalize(name)} - ${formatPrice(price)}`

export const productsAdapter = (product) => {
  const {
    id,
    name,
    isActive,
    description,
    basePrice,
    avaiability,
    attributes,
    ingredients,
    image,
    productCategory: { categoryName },
  } = product

  const adaptedProduct = {
    id,
    name,
    image,
    isActive,
    sections: [
      {
        icon: getIcon(categoryName),
        title: categoryName,
        content: {
          values: [],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: PRICE,
        title: 'Preço',
        content: {
          values: [formatPrice(basePrice, true)],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: DESCRIPTION,
        title: 'Descrição',
        content: {
          values: [description],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: LIST,
        title: 'Ingredientes',
        content: {
          values: ingredients.map((p) => p),
          type: contentTypes.LIST,
        },
      },
      {
        icon: CALENDAR,
        title: 'Disponibilidade',
        content: {
          values: avaiability ? avaiability.map((a) => dayTranslation[a]) : ['Indisponível'],
          type: contentTypes.LIST,
        },
      },
    ],
  }

  if (attributes) {
    const attributeSections = attributes?.map(({ options, type }) => ({
      icon: getIcon(type),
      title: attributesTranslation[type],
      content: {
        values: options?.map((option) => formatOption(option)),
        type: contentTypes.LIST,
      },
    }))

    attributeSections.forEach((section) => {
      adaptedProduct.sections.push(section)
    })
  }

  return adaptedProduct
}

export const teste = 0
