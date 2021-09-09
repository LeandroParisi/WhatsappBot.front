import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'

export const mapDeliveryFees = (type, fees) => {
  switch (type) {
    case deliveryFeeTypes.unique:
      return [`R$ ${fees}`]
    case deliveryFeeTypes.radius:
      return fees?.map(([range, p]) => (`${range} KM - R$ ${p}`))
    case deliveryFeeTypes.neighborhood:
      throw new Error('Not implemented yet')
    default:
      throw new Error('Unknown delivery fee type')
  }
}

export const teste = 9
