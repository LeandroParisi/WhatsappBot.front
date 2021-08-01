import filterTypes from 'libs/filterTypes'
import { deliveryTypes } from 'interfaces/deliveryTypes/deliveryTypes'
import { paymentMethods } from 'interfaces/paymentMethods/methods'
import * as Yup from 'yup'
import { statusFilter } from '../generalFilters/generalFilters'

const {
  INPUT,
  // SELECT,
  // BOOL,
  ICONS,
} = filterTypes

const {
  DELIVERY,
  COUNTER_PICKUP,
  ON_SPOT_CONSUMPTION,
} = deliveryTypes

const deliveryTypeFilters = [
  {
    id: 1,
    name: DELIVERY,
  },
  {
    id: 2,
    name: COUNTER_PICKUP,
  },
  {
    id: 3,
    name: ON_SPOT_CONSUMPTION,
  },
]

const paymentMethodFilters = [
  {
    id: 1,
    name: paymentMethods.MONEY,
  },
  {
    id: 2,
    name: paymentMethods.PIX,
  },
  {
    id: 3,
    name: paymentMethods.CREDIT,
  },
  {
    id: 4,
    name: paymentMethods.DEBIT,
  },
  {
    id: 5,
    name: paymentMethods.ALELO_MEAL,
  },
  {
    id: 6,
    name: paymentMethods.ALELO_FOOD,
  },
  {
    id: 7,
    name: paymentMethods.SODEXO_MEAL,
  },
  {
    id: 8,
    name: paymentMethods.SODEXO_FOOD,
  },
]

export const filterInterface = [
  {
    key: 'branchName',
    type: INPUT,
    placeholder: 'Nome da filial',
  },
  {
    key: 'deliveryType',
    type: ICONS,
    options: deliveryTypeFilters,
    placeholder: 'Tipo de entrega',
  },
  {
    key: 'paymentMethod',
    type: ICONS,
    options: paymentMethodFilters,
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
