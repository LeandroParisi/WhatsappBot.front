import {
  pickUp,
  truck,
  store,
  food,
  drink,
  alcooholicDrink,
  plus,
  list,
  creditCard,
  price,
  cancel,
} from 'assets/icons/iconsLib'

import { deliveryTypes } from 'interfaces/deliveryTypes/deliveryTypes'

export const deliveryIcons = {
  [deliveryTypes.DELIVERY]: truck,
  [deliveryTypes.COUNTER_PICKUP]: pickUp,
  [deliveryTypes.ON_SPOT_CONSUMPTION]: store,
}

export const categoryIcons = {
  Comida: food,
  Sucos: drink,
  'Bebidas alcoólicas': alcooholicDrink,
}

export const attributeIcons = {
  sizes: list,
  additionals: plus,
}

export const paymentIcons = {
  credit: creditCard,
  debit: creditCard,
  pix: 'pix',
  money: price,
}

export const groupedIcons = {
  ...deliveryIcons,
  ...paymentIcons,
}

export const getIcon = (iconLib, iconName) => iconLib[iconName] || cancel

export const customPaymentIcons = new Set(['pix'])

export const attributesWithoutQuantity = new Set(['sizes'])
