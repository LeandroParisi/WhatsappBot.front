import filterTypes from 'libs/filterTypes'
import deliveryTypes from 'interfaces/deliveryTypes/deliveryTypes'

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

export const filterInterface = {
  branchName: {
    type: filterTypes.INPUT,
    placeholder: 'Nome da filial',
  },
  deliveryType: {
    type: filterTypes.SELECT,
    options: deliveryTypeFilters,
    placeholder: 'Tipo de entrega',
  },
  isActive: {
    type: filterTypes.BOOL,
    placeholder: 'Status',
  },
}

export const filterValidations = 'teste'
