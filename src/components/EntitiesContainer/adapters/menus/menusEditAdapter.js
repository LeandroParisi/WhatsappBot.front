import { menusInterface } from 'interfaces/menus/menusInterface'
import { inputTypes, customFieldTypes } from 'libs/inputTypes'

const {
  INPUT,
  IMAGE,
  ICONS,
  SELECT,
  SELECT_LIST,
} = inputTypes

const menusEditAdapter = (menu) => {
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

export default menusEditAdapter
