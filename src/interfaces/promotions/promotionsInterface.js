export const teste = 0

const promotionsInterface = {
  id: 'id',
  name: 'name',
  totalPrice: 'totalPrice',
  isActive: 'isActive',
  avaiability: 'avaiability',
  dueDate: 'dueDate',
  promotionProducts: 'promotionProducts',
  branchesPromotions: 'branchesPromotions',
  image: 'image',
}

export const defaultValues = {
  [promotionsInterface.id]: '',
  [promotionsInterface.name]: '',
  [promotionsInterface.totalPrice]: '',
  [promotionsInterface.isActive]: true,
  [promotionsInterface.avaiability]: [],
  [promotionsInterface.dueDate]: null,
  [promotionsInterface.promotionProducts]: [],
  [promotionsInterface.branchesPromotions]: [],
  [promotionsInterface.image]: null,
}

export default promotionsInterface
