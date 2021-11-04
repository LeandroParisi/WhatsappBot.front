import { attributesWithoutQuantity } from 'assets/icons/iconsLib'

const extractAttributesTypes = (attributes) => {
  if (attributes) {
    return new Set(attributes.map((attribute) => attribute.type))
  }
  return null
}

const groupAttributesByType = (attributes) => {
  const attributesByType = {}
  const types = extractAttributesTypes(attributes)

  if (!types) {
    return null
  }

  types.forEach((type) => {
    attributesByType[type] = attributes.filter((attribute) => attribute.type === type)
  })

  return attributesByType
}

const getAttributeText = (attribute, { name, quantity }) => {
  if (attributesWithoutQuantity.has(attribute)) {
    return `${name}`
  }
  return `${name} x ${quantity}`
}

export {
  extractAttributesTypes,
  groupAttributesByType,
  getAttributeText,
}
