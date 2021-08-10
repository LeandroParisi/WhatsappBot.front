export const deliveryTypes = {
  DELIVERY: 'delivery',
  COUNTER_PICKUP: 'counter_pickup',
  ON_SPOT_CONSUMPTION: 'on_spot_consumption',
}

export const deliveryTranslation = {
  [deliveryTypes.DELIVERY]: 'Entrega',
  [deliveryTypes.COUNTER_PICKUP]: 'Retirada por conta do cliente',
  [deliveryTypes.ON_SPOT_CONSUMPTION]: 'Consumo no local',
}

export const deliveryTypesInterface = [
  {
    id: 1,
    name: deliveryTypes.DELIVERY,
  },
  {
    id: 2,
    name: deliveryTypes.COUNTER_PICKUP,
  },
  {
    id: 3,
    name: deliveryTypes.ON_SPOT_CONSUMPTION,
  },
]
