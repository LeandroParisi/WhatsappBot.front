import { inputTypes } from 'shared/libs/inputTypes'
import { deliveryTypesInterface } from 'shared/interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'shared/interfaces/paymentMethods/methods'
import * as Yup from 'yup'
import { statusFilter } from '../generalFilters/generalFilters'

const {
  INPUT,
  // SELECT,
  // BOOL,
  ICONS,
} = inputTypes

export const filterInterface = [
  {
    key: 'branchName',
    type: INPUT,
    placeholder: 'Nome da filial',
  },
  {
    key: 'deliveryType',
    type: ICONS,
    options: deliveryTypesInterface,
    placeholder: 'Tipo de entrega',
  },
  {
    key: 'paymentMethod',
    type: ICONS,
    options: paymentMethodInterface,
    placeholder: 'Tipo de pagamento',
  },
  {
    ...statusFilter,
  },
]
