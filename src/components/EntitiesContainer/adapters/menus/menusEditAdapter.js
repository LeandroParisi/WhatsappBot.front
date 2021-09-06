import { menusInterface } from 'interfaces/menus/menusInterface'
import { inputTypes, customFieldTypes } from 'libs/inputTypes'

const {
  INPUT,
  IMAGE,
  ICONS,
  SELECT,
} = inputTypes

const menusEditAdapter = (menu) => {
  const {
    id,
    isActive,
    image,
    menuName,
    description,

  } = menu

  return {
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
      // {
      //   title: 'Produtos',
      //   subSections: [
      //     {

      //     }
      //   ]
      // }
    ],
  }
}

export default menusEditAdapter
