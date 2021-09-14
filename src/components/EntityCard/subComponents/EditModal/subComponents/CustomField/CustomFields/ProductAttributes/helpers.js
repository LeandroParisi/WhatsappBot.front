import { attributes, attributesTranslation } from 'interfaces/products/productsInterface'

export const extractRemainingAttributeTypes = (stateField) => {
  const allowedAttributes = Object.values(attributes)
    .map((attribute) => ({ id: attribute, name: attributesTranslation[attribute] }))

  const selectedAttributes = new Set(stateField.map(({ type }) => type))

  return allowedAttributes.filter(({ id }) => !selectedAttributes.has(id))
}

export const teste = 0
