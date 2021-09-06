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
  faEdit,
  faTimes,
  faLock,
  faLockOpen,
  faFileAlt,
  f,
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

export const generalIcons = {
  MANAGER: faIdBadge,
  ADDRESS: faMapMarkerAlt,
  DELIVERY_FEE: faHandHoldingUsd,
  DELIVERY_TYPE: faTruckLoading,
  PAYMENT_TYPE: faMoneyBillWave,

  ARROW_DOWN: faAngleDown,
  ARROW_UP: faAngleUp,
  CLOCK: faClock,
  ARROW_RIGHT: faArrowRight,
  ARROW_LEFT: faArrowLeft,
  CHECKMARK: faCheck,
  USER: faUser,
  PHONE: faPhoneAlt,

  CLOSE: faTimes,

  PRICE: faDollarSign,

  OPENED: faLockOpen,
  CLOSED: faLock,

  ADD: faPlus,

  DESCRIPTION: faFileAlt,
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

export const entityMenuIcons = {
  edit: faEdit,
}

export const groupedIcons = {
  ...menuIcons,
  ...generalIcons,
  ...deliveryIcons,
  ...categoryIcons,
  ...attributeIcons,
  ...paymentIcons,
  ...entityMenuIcons,
}

export const customIcons = new Set([paymentMethods.PIX])

export const attributesWithoutQuantity = new Set([attributes.SIZES])

export const getIcon = (iconName) => groupedIcons[iconName] || faBan

// -----
// -----
// TOOLTIPS:

export const tooltips = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',
  times: 'Fechar',

  edit: 'Editar',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
  [paymentMethods.PIX]: 'Pix',

}
