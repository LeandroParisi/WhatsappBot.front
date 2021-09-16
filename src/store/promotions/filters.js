import { inputTypes } from 'libs/inputTypes'
import { menusInterface } from 'interfaces/menus/menusInterface'
import { statusFilter } from '../generalFilters/generalFilters'
import promotionsInterface from '../../interfaces/promotions/promotionsInterface'

const {
  INPUT,
  RANGE,
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
    max: 100,
    min: 0,
  },
  {
    ...statusFilter,
  },
]

export default filterInterface
