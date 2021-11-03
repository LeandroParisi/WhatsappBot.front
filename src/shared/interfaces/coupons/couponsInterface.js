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
}

export const discountType = {
  percentage: 'percentage',
  absolute_value: 'absolute_value',
}

export const discounTypeTranslation = {
  [discountType.percentage]: 'Porcentagem',
  [discountType.absoluteValue]: 'Valor',
}

export const conditions = {
  price_limit: 'price_limit',
  date_limit: 'date_limit',
  distance_limit: 'distance_limit',
  uses_limit: 'uses_limit',
}

export const conditionsTranslations = {
  [conditions.price_limit]: 'Preço',
  [conditions.date_limit]: 'Data',
  [conditions.distance_limit]: 'Distância',
  [conditions.uses_limit]: 'Usos',
}

export default couponsInterface
