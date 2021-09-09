import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'

const {
  DESCRIPTION,
  PRODUCT,
  STORE,
} = groupedIcons

const menusAdapter = (menu) => {
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

export default menusAdapter
