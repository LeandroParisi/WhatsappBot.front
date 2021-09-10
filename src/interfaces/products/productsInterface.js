const productsInterface = {
  id: 'id',
  branchId: 'branchId',
  categoryId: 'categoryId',
  name: 'name',
  attributes: 'attributes',
  basePrice: 'basePrice',
  description: 'description',
  ingredients: 'ingredients',
  avaiability: 'avaiability',
  isActive: 'isActive',
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
