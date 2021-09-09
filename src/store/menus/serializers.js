import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'

import { menusInterface } from 'interfaces/menus/menusInterface'
import { inputTypes, customFieldTypes } from 'libs/inputTypes'

const {
  INPUT,
  IMAGE,
  ICONS,
  SELECT,
  SELECT_LIST,
} = inputTypes

const {
  DESCRIPTION,
  PRODUCT,
  STORE,
} = groupedIcons

export const editMenusAdapter = (menu) => {
  const {
    id,
    isActive,
    image,
    menuName,
    description,
    menuProducts,
  } = menu

  return {
    id,
    isActive,
    header: [
      {
        value: image,
        key: menusInterface.image,
        fieldType: IMAGE,
      },
      {
        value: menuName,
        key: menusInterface.menuName,
        fieldType: INPUT,
      },
    ],

    sections: [
      {
        title: 'Dados Gerais',
        subSections: [
          {
            value: description,
            key: menusInterface.description,
            sectionName: 'Descrição',
            fieldType: INPUT,
          },
        ],
      },
      {
        title: 'Relações',
        subSections: [
          {
            value: menuProducts,
            options: '',
            key: menusInterface.products,
            sectionName: 'Produtos',
            fieldType: SELECT_LIST,
          },
        ],
      },
    ],
  }
}

export const menusAdapter = (menu) => {
  const {
    id,
    menuName,
    image,
    isActive,
    description,
    menuProducts,
    branchesMenus,
  } = menu

  return {
    id,
    name: menuName,
    image,
    isActive,
    sections: [
      {
        icon: DESCRIPTION,
        title: 'Descrição',
        content: {
          values: [description],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: PRODUCT,
        title: 'Produtos',
        content: {
          values: menuProducts.map((product) => product.name),
          type: contentTypes.LIST,
        },
      },
      {
        icon: STORE,
        title: 'Filiais',
        content: {
          values: branchesMenus.map(({ branchName }) => branchName),
          type: contentTypes.LIST,
        },
      },

    ],
  }
}
