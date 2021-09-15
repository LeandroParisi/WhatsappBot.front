const productsInterface = {
  id: 'id',
  image: 'image',
  categoryId: 'categoryId',
  name: 'name',
  attributes: 'attributes',
  basePrice: 'basePrice',
  description: 'description',
  ingredients: 'ingredients',
  avaiability: 'avaiability',
  isActive: 'isActive',
  menuProducts: 'menuProducts',
  branchesProducts: 'branchesProducts',
  productCategory: 'productCategory',
}

export const defaultValues = {
  [productsInterface.id]: '',
  [productsInterface.image]: '',
  [productsInterface.productCategory]: { id: 0, categoryName: '' },
  [productsInterface.name]: '',
  [productsInterface.attributes]: [],
  [productsInterface.basePrice]: '',
  [productsInterface.description]: '',
  [productsInterface.ingredients]: [],
  [productsInterface.avaiability]: [],
  [productsInterface.isActive]: true,
  [productsInterface.menuProducts]: [],
  [productsInterface.branchesProducts]: [],
}

export const categories = {
  FOOD: 'Comida',
  DRINK: 'Sucos',
  ALCOOHOLIC: 'Bebidas alcoólicas',
}

export const attributes = {
  SIZES: 'sizes',
  ADDITIONALS: 'additionals',
}

export const attributesTranslation = {
  [attributes.SIZES]: 'Tamanhos',
  [attributes.ADDITIONALS]: 'Adicionais',
}

export const attributeOptionInterface = {
  description: '',
  max: null,
  min: null,
  name: '',
  price: 0,
}

export const attributesInterface = {
  type: '',
  options: [
    { ...attributeOptionInterface },
  ],
}

export const createAttribute = (attributeType) => {
  const newAttribute = {
    type: attributeType,
    options: [],
  }
  return newAttribute
}

export default productsInterface
