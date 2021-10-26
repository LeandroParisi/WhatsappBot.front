import { attributes as attributeOptions, singleAttributes } from 'interfaces/products/productsInterface'

const newAttributeFactory = (attribute, type, quantity) => {
  const newAttr = { ...attribute, quantity, type }
  delete newAttr.max
  delete newAttr.min
  delete newAttr.description
  return newAttr
}

export const getAttributeMaximum = (attributes, selectedAttribute) => {
  const attributeGroup = attributes
    .find((attrs) => attrs.type === selectedAttribute.type).options

  return attributeGroup.find(({ name }) => name === selectedAttribute.name).max
}

export const injectSelectedAttributes = (options, product) => {
  const { attributes: selectedAttributes } = product
  return {
    ...product,
    selectedAttributes,
    attributes: options?.find((p) => p.id === product.productId)?.attributes,
  }
}

export const extractSelectedQuantity = (selectedAttributes, productName) => selectedAttributes
  ?.find((attr) => attr.name === productName)?.quantity || 0

export const isAttributeMaxedOut = (name, max, selectedAttributes) => {
  const selectedAttribute = selectedAttributes.find((attr) => attr.name === name)
  if (selectedAttribute && singleAttributes.has(selectedAttribute.type)) return true
  if (!selectedAttribute || !max) return false
  if (selectedAttribute.quantity === Number(max)) return true
}

export const findAttribute = (attributes, type, id) => attributes
  .find((attr) => attr.type === type)
  .options.find((option) => option.id === id)

export const newProductFactory = (options, productId, temporaryId) => {
  const selectedProduct = options.find(({ id }) => id === productId)
  const { id } = selectedProduct
  const newProduct = { ...selectedProduct, productId: id, temporaryId }
  delete newProduct.id

  const selectedAttributes = []
  selectedProduct?.attributes?.forEach((attr) => {
    const { options, type } = attr
    if (type === attributeOptions.SIZES) {
      const newAttribute = newAttributeFactory(attr.options[0], type, 1)
      selectedAttributes.push(newAttribute)
    } else {
      options?.forEach((attribute) => {
        const newAttribute = newAttributeFactory(attribute, type, 0)
        selectedAttributes.push(newAttribute)
      })
    }
  })

  return {
    ...newProduct,
    attributes: selectedAttributes,
  }
}

export const updateProduct = (state, productId, newAttributes) => {
  const newState = [...state]
  const newProduct = {
    ...newState.find((prod) => prod.temporaryId === productId),
    attributes: newAttributes,
  }

  const productIndex = newState.findIndex((prod) => prod.temporaryId === productId)
  newState.splice(productIndex, 1, newProduct)
  return newState
}
