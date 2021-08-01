import {
  faTruck,
  faStore,
  faAngleDown,
  faAngleUp,
  faHands,
  faDollarSign,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faClock,
  faUtensils,
  faWineGlassAlt,
  faGlassWhiskey,
  faPlus,
  faListUl,
  faUser,
  faPhoneAlt,
  faCreditCard,
  faCaretDown,
  faBoxes,
  faSearchDollar,
  faReceipt,
  faIdBadge,
  faCog,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faTruckLoading,
  faMoneyBillWave,
  faBan,
} from '@fortawesome/free-solid-svg-icons'

import { deliveryTypes } from 'interfaces/deliveryTypes/deliveryTypes'
import { categories } from 'interfaces/orders/orderCategories'
import { paymentMethods } from 'interfaces/paymentMethods/methods'
import { attributes } from 'interfaces/products/attributes'

export const menuIcons = {
  STORE: faStore,
  LIST: faListUl,
  PRODUCT: faBoxes,
  PROMOTION: faSearchDollar,
  COUPOM: faReceipt,
  ACCOUNT: faIdBadge,
  CONFIGURATIONS: faCog,
}

export const deliveryIcons = {
  [deliveryTypes.DELIVERY]: faTruck,
  [deliveryTypes.COUNTER_PICKUP]: faHands,
  [deliveryTypes.ON_SPOT_CONSUMPTION]: faStore,
}

export const categoryIcons = {
  [categories.FOOD]: faUtensils,
  [categories.DRINK]: faGlassWhiskey,
  [categories.ALCOOHOLIC]: faWineGlassAlt,
}

export const attributeIcons = {
  [attributes.SIZES]: faListUl,
  [attributes.ADDITIONALS]: faPlus,
}

export const paymentIcons = {
  [paymentMethods.CREDIT]: faCreditCard,
  [paymentMethods.DEBIT]: faCreditCard,
  [paymentMethods.PIX]: 'pix',
  [paymentMethods.MONEY]: faDollarSign,
}

export const groupedIcons = {
  ...deliveryIcons,
  ...paymentIcons,
}

export const getIcon = (iconLib, iconName) => iconLib[iconName] || faBan

export const customIcons = new Set(['pix'])

export const attributesWithoutQuantity = new Set(['sizes'])

export const truck = faTruck
export const pickUp = faHands
export const arrowDown = faAngleDown
export const arrowUp = faAngleUp
export const price = faDollarSign
export const arrowRight = faArrowRight
export const arrowLeft = faArrowLeft
export const checkMark = faCheck
export const clock = faClock
export const food = faUtensils
export const drink = faGlassWhiskey
export const alcooholicDrink = faWineGlassAlt
export const plus = faPlus
export const user = faUser
export const phone = faPhoneAlt
export const creditCard = faCreditCard
export const menu = faCaretDown
export const manager = faIdBadge
export const address = faMapMarkerAlt

export const deliveryFee = faHandHoldingUsd
export const deliveryTypeIcon = faTruckLoading
export const paymentTypeIcon = faMoneyBillWave

export const cancel = faBan

export const tooltips = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
}

export const customIconsTooltips = {
  pix: 'Pix',
}

export const list = faListUl
export const store = faStore
