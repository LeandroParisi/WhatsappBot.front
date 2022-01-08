/* eslint-disable import/prefer-default-export */
import { deliveryFeeTypes } from 'shared/interfaces/deliveryFees/deliveryFeeTypes'

export const normalizeDeliveryFees = (deliveryFees) => {
  const normalizedDeliveryFees = { ...deliveryFees }
  if (deliveryFees.type === deliveryFeeTypes.unique) {
    normalizedDeliveryFees.fees = Number(normalizedDeliveryFees.fees)
  }

  return normalizedDeliveryFees
}
