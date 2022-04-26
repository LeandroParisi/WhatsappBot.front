// export const
import couponsInterface, { discountTypes, conditionsTranslations, conditionsInterface } from 'shared/interfaces/coupons/couponsInterface'
import { formatDate } from 'shared/utils/formatDate'
import formatPercentage from 'shared/utils/formatPercentage'
import formatPrice from 'shared/utils/formatPrice'

export const formatDiscount = (discount, type) => {
  if (type === discountTypes.absolute_value) return formatPrice(discount, true)
  return formatPercentage(discount, true)
}

const parseConditionByType = (type, value) => {
  switch (type) {
    case conditionsInterface.price_limit:
      return formatPrice(value, true)
    case conditionsInterface.date_limit:
      return formatDate(value)
    case conditionsInterface.distance_limit_in_km:
      return `${value} KM`
    case conditionsInterface.uses_limit:
      return value
    default:
      throw new Error('Tipo de promoção não mapeado: Coupons/utils')
  }
}

export const formatConditions = (coupomConditions, conditionsLimits) => {
  const formatedConditions = coupomConditions.map(({ name }) => (
    `${conditionsTranslations[name]}: ${parseConditionByType(name, conditionsLimits[name])}`
  ))
  return formatedConditions
}

const getConditionId = (conditions, conditionName) => (
  conditions
    .find((c) => c.name === conditionName).id
)

export const checkConditionExists = (conditions, condition) => (store) => (
  store[couponsInterface.coupomConditions]
    .has(getConditionId(conditions, condition))
)
