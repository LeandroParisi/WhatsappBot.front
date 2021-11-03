import { inputTypes } from 'libs/inputTypes'
import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import { statusFilter } from '../generalFilters/generalFilters'
import couponsInterface from '../../interfaces/coupons/couponsInterface'

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
