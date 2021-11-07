import { deliveryFeeTypes } from 'shared/interfaces/deliveryFees/deliveryFeeTypes'

const formatRadiusFee = (fees) => fees.map(([range, p]) => (`${range} KM - R$ ${p}`))

export const mapDeliveryFees = (type, fees) => {
  switch (type) {
    case deliveryFeeTypes.unique:
      return [`R$ ${fees}`]
    case deliveryFeeTypes.radius:
      return formatRadiusFee(fees)
    case deliveryFeeTypes.neighborhood:
      throw new Error('Not implemented yet')
    default:
      throw new Error('Unknown delivery fee type')
  }
}

export const teste = 9
