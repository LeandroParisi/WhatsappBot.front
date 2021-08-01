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

export const getIcon = (iconLib, iconName) => iconLib[iconName] || cancel

export const customPaymentIcons = new Set(['pix'])

export const attributesWithoutQuantity = new Set(['sizes'])
