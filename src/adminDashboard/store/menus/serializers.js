import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'

import { menusInterface, defaultValues } from 'shared/interfaces/menus/menusInterface'
import { inputTypes } from 'libs/inputTypes'

const {
  INPUT,
  IMAGE,
  SELECT_LIST,
} = inputTypes

const {
  DESCRIPTION,
  PRODUCT,
  STORE,
} = groupedIcons

export const editMenusAdapter = (menu, userProducts, userBranches) => {
  const {
    id = defaultValues.id,
    isActive = defaultValues.isActive,
    image = defaultValues.image,
    menuName = defaultValues.menuName,
    description = defaultValues.description,
    menuProducts = defaultValues.products,
    branchesMenus = defaultValues.menuBranches,
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
            value: branchesMenus.map(({ id, branchName }) => ({ id, name: branchName })),
            options: userBranches.map(({ id, branchName }) => ({ id, name: branchName })),
            key: menusInterface.menuBranches,
            sectionName: 'Filiais',
            fieldType: SELECT_LIST,
          },
          {
            value: menuProducts,
            options: userProducts.map(({ id, name }) => ({ id, name })),
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

export const normalizeEditPayload = (body) => {
  const {
    menuBranches,
    products,
  } = body

  return {
    ...body,
    menuBranches: menuBranches.map(({ id }) => id),
    products: products.map(({ id }) => id),
  }
}
