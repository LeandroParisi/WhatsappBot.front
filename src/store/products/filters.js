import { inputTypes } from 'libs/inputTypes'
import { statusFilter } from '../generalFilters/generalFilters'
import productsInterface from '../../interfaces/products/productsInterface'

const {
  INPUT,
  ICONS,
} = inputTypes

export const filterInterface = [
  {
    key: productsInterface.name,
    type: INPUT,
    placeholder: 'Nome do produto',
  },
  {
    key: productsInterface.categoryId,
    type: INPUT,
    placeholder: 'Categoria',
  },
  {
    key: productsInterface.basePrice,
    type: INPUT,
    placeholder: 'Preço',
  },
  {
    key: productsInterface.description,
    type: INPUT,
    placeholder: 'Descrição',
  },
  {
    ...statusFilter,
  },
]

export const teste = 0
