// export const
import couponsInterface, { discountType, conditionsTranslations, conditions } from 'shared/interfaces/coupons/couponsInterface'
import { formatDate } from 'utils/formatDate'
import formatPercentage from 'utils/formatPercentage'
import formatPrice from 'utils/formatPrice'

export const formatDiscount = (discount, type) => {
  if (type === discountType.absolute_value) return formatPrice(discount, true)
  return formatPercentage(discount, true)
}

const parseConditionByType = (type, value) => {
  switch (type) {
    case conditions.price_limit:
      return formatPrice(value, true)
    case conditions.date_limit:
      return formatDate(value)
    case conditions.distance_limit:
      return `${value} KM`
    case conditions.uses_limit:
      return value
    default:
      throw new Error('Tipo de promoção não mapeado: Coupons/utils')
  }
}

export const formatConditions = (coupomConditions, conditionsLimits) => {
  const formatedConditions = coupomConditions.map(({ condition }) => (
    `${conditionsTranslations[condition]}: ${parseConditionByType(condition, conditionsLimits[condition])}`
  ))
  return formatedConditions
}
