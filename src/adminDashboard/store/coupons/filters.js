import { inputTypes } from 'shared/libs/inputTypes'
import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import couponsInterface from 'shared/interfaces/coupons/couponsInterface'
import { statusFilter } from '../generalFilters/generalFilters'

const {
  INPUT,
  RANGE,
} = inputTypes

const filterInterface = [
  {
    key: couponsInterface.coupomCode,
    type: INPUT,
    placeholder: 'Código do cupom',
  },
  {
    key: couponsInterface.discount,
    type: RANGE,
    placeholder: 'Valor do desconto (% ou R$)',
    max: 100,
    min: 0,
    unmasked: true,
  },
  {
    key: couponsInterface.used,
    type: RANGE,
    placeholder: 'Quantidade de usos',
    max: 100,
    min: 0,
    unmasked: true,
  },
  {
    ...statusFilter,
  },
]

export default filterInterface
