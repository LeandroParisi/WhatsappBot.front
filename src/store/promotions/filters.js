import { inputTypes } from 'libs/inputTypes'
import { menusInterface } from 'interfaces/menus/menusInterface'
import { statusFilter } from '../generalFilters/generalFilters'
import promotionsInterface from '../../interfaces/promotions/promotionsInterface'

const {
  INPUT,
  RANGE,
  ICONS,
} = inputTypes

const filterInterface = [
  {
    key: promotionsInterface.name,
    type: INPUT,
    placeholder: 'Nome da promoção',
  },

  {
    key: promotionsInterface.totalPrice,
    type: RANGE,
    placeholder: 'Preço',
    max: 250,
    min: 0,
  },
  // {
  //   key: promotionsInterface.description,
  //   type: INPUT,
  //   placeholder: 'Descrição',
  // },
  {
    ...statusFilter,
  },
]

export default filterInterface
