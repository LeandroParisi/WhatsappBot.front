export const teste = 0

const promotionsInterface = {
  id: 'id',
  name: 'name',
  totalPrice: 'totalPrice',
  isActive: 'isActive',
  avaiability: 'avaiability',
  dueDate: 'dueDate',
  promotionProducts: 'promotionProducts',
  branchPromotions: 'branchPromotions',
  image: 'image',
}

export const defaultValues = {
  [promotionsInterface.id]: '',
  [promotionsInterface.name]: '',
  [promotionsInterface.totalPrice]: '',
  [promotionsInterface.isActive]: '',
  [promotionsInterface.avaiability]: [],
  [promotionsInterface.dueDate]: null,
  [promotionsInterface.promotionProducts]: [],
  [promotionsInterface.branchPromotions]: [],
  [promotionsInterface.image]: null,
}

export default promotionsInterface
