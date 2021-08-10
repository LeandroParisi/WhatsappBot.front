import inputTypes from 'libs/inputTypes'
import { deliveryTypesInterface } from 'interfaces/deliveryTypes/deliveryTypes'
import { paymentMethodInterface } from 'interfaces/paymentMethods/methods'
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

export const validationSchema = Yup.object({
  branchName: Yup.string(),
  deliveryType: Yup.string(),
  isActive: Yup.bool(),
})
