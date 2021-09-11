import { getIcon, groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'
import formatPrice from 'utils/formatPrice'
import capitalize from 'utils/capitalize'
import {
  dayToNumber,
  dayTranslation,
} from 'interfaces/openingHours/openingHoursInterface'
import productsInterface, { attributesTranslation, categories, defaultValues } from 'interfaces/products/productsInterface'
import { inputTypes } from 'libs/inputTypes'
import { Select } from 'components'

const {
  LIST,
  DESCRIPTION,
  PRICE,
  CALENDAR,
  STORE,
} = groupedIcons

const {
  INPUT,
  IMAGE,
  SELECT_LIST,
} = inputTypes

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
    menuProducts,
    branchesProducts,
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

  adaptedProduct.sections.push({
    icon: LIST,
    title: 'Menus',
    content: {
      values: menuProducts.map(({ menuName }) => menuName),
      type: contentTypes.LIST,
    },
  })

  adaptedProduct.sections.push({
    icon: STORE,
    title: 'Filiais',
    content: {
      values: branchesProducts.map(({ branchName }) => branchName),
      type: contentTypes.LIST,
    },
  })

  return adaptedProduct
}

export const editProductsAdapter = (menu) => {
  const {
    id = defaultValues.id,
    isActive = defaultValues.isActive,
    image = defaultValues.image,
    name = defaultValues.name,
    basePrice = defaultValues.basePrice,
    description = defaultValues.description,
    menuProducts = defaultValues.products,
    branchesMenus = defaultValues.menuBranches,
    avaiability = defaultValues.avaiability,
  } = menu

  console.log({ avaiability })

  return {
    id,
    isActive,
    header: [
      {
        value: image,
        key: productsInterface.image,
        fieldType: IMAGE,
      },
      {
        value: name,
        key: productsInterface.name,
        fieldType: INPUT,
      },
    ],

    sections: [
      {
        title: 'Dados Gerais',
        subSections: [
          {
            value: description,
            key: productsInterface.description,
            sectionName: 'Descrição',
            fieldType: INPUT,
          },
          {
            value: basePrice,
            key: productsInterface.basePrice,
            sectionName: 'Preço',
            fieldType: INPUT,
          },
          {
            value: avaiability?.map((day) => ({ id: day, name: dayTranslation[day] })),
            options: Object.entries(dayTranslation).map(([id, name]) => ({ id, name })),
            key: productsInterface.avaiability,
            sectionName: 'Disponibilidade',
            fieldType: SELECT_LIST,
          },
        ],
      },

    ],
  }
}

export const teste = 0
