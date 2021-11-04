import { inputTypes } from 'libs/inputTypes'
import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import promotionsInterface from 'shared/interfaces/promotions/promotionsInterface'
import { statusFilter } from '../generalFilters/generalFilters'

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
