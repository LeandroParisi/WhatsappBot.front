const couponsInterface = {
  id: 'id',
  coupomCode: 'coupomCode',
  coupomBranches: 'coupomBranches',
  coupomConditions: 'coupomConditions',
  discountType: 'discountType',
  discount: 'discount',
  used: 'used',
  priceLimit: 'priceLimit',
  dateLimit: 'dateLimit',
  distanceLimit: 'distanceLimit',
  usesLimit: 'usesLimit',
  isActive: 'isActive',
  image: 'image',
}

export const discountTypes = {
  percentage: 'percentage',
  absolute_value: 'absolute_value',
}

export const discountTypeTranslation = {
  [discountTypes.percentage]: 'Porcentagem',
  [discountTypes.absolute_value]: 'Valor',
}

export const discountTypesInterface = [
  {
    id: 1,
    name: discountTypeTranslation[discountTypes.percentage],
    payloadValue: discountTypes.percentage,
  },
  {
    id: 2,
    name: discountTypeTranslation[discountTypes.absolute_value],
    payloadValue: discountTypes.absolute_value,
  },
]

export const conditionsInterface = {
  price_limit: 'price_limit',
  date_limit: 'date_limit',
  distance_limit: 'distance_limit',
  uses_limit: 'uses_limit',
}

export const conditionsTranslations = {
  [conditionsInterface.price_limit]: 'Preço',
  [conditionsInterface.date_limit]: 'Data',
  [conditionsInterface.distance_limit]: 'Distância',
  [conditionsInterface.uses_limit]: 'Usos',
}

export default couponsInterface
