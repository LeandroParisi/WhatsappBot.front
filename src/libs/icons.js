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
} from 'assets/icons/iconsLib'

export const deliveryIcons = {
  delivery: truck,
  counter_pickup: pickUp,
  on_spot_consumption: store,
}

export const deliveryTranslation = {
  delivery: 'Entrega',
  counter_pickup: 'Retirada por conta do cliente',
  on_spot_consumption: 'Consumo no local',
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

export const customPaymentIcons = new Set(['pix'])

export const attributesWithoutQuantity = new Set(['sizes'])
