import { inputTypes } from 'shared/libs/inputTypes'
import productsInterface from 'shared/interfaces/products/productsInterface'
import { statusFilter } from '../generalFilters/generalFilters'

const {
  INPUT,
  ICONS,
  RANGE,
} = inputTypes

export const getFilterInterface = (categories) => ([
  {
    key: productsInterface.name,
    type: INPUT,
    placeholder: 'Nome do produto',
  },
  {
    key: productsInterface.categoryId,
    type: ICONS,
    options: categories.map(({ id, categoryName }) => ({ id, name: categoryName })),
    placeholder: 'Categoria',
  },
  {
    key: productsInterface.basePrice,
    type: RANGE,
    placeholder: 'Preço',
    max: 200,
    min: 0,
  },
  {
    key: productsInterface.description,
    type: INPUT,
    placeholder: 'Descrição',
  },
  {
    ...statusFilter,
  },
])

export const teste = 0
