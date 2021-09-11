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
}

export const defaultValues = {
  [productsInterface.id]: '',
  [productsInterface.image]: '',
  [productsInterface.categoryId]: '',
  [productsInterface.name]: '',
  [productsInterface.attributes]: '',
  [productsInterface.basePrice]: '',
  [productsInterface.description]: '',
  [productsInterface.ingredients]: '',
  [productsInterface.avaiability]: [],
  [productsInterface.isActive]: '',
  [productsInterface.menuProducts]: '',
  [productsInterface.branchesProducts]: '',
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

export default productsInterface
