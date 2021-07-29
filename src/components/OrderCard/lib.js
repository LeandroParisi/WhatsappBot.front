import {
  pickUp,
  truck,
  store,
  food,
  drink,
  alcooholicDrink,
  plus,
  list,
} from 'assets/icons/iconsLib'

export const deliveryIcon = {
  delivery: truck,
  counter_pickup: pickUp,
  on_spot_consumption: store,
}

export const deliveryTranslation = {
  delivery: 'Entrega',
  counter_pickup: 'Retirada por conta do cliente',
  on_spot_consumption: 'Consumo no local',
}

export const categoryIcon = {
  Comida: food,
  Sucos: drink,
  'Bebidas alcoólicas': alcooholicDrink,
}

export const attributeIcons = {
  sizes: list,
  additionals: plus,
}

export const attributesWithoutQuantity = new Set(['sizes'])
