import { groupedIcons } from 'assets/icons/iconsLib'
import contentTypes from 'libs/sectionTypes'

const {
  DESCRIPTION,
  LIST,
} = groupedIcons

const menusAdapter = (menu) => {
  const {
    id,
    menuName,
    image,
    isActive,
    description,
    menuProducts,

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
        icon: LIST,
        title: 'Produtos',
        content: {
          values: menuProducts.map((product) => product.name),
          type: contentTypes.LIST,
        },
      },
    ],
  }
}

export default menusAdapter
