import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import promotionsInterface from 'shared/interfaces/promotions/promotionsInterface'
import { arrayNotEmpty, isNotEmpty, isNumber } from 'adminDashboard/store/sharedMethods/validations'

export const errorsLib = {
  [promotionsInterface.name]: 'Favor escolher um nome',
  [promotionsInterface.totalPrice]: 'Este campo deve ser um valor numérico',
  [promotionsInterface.promotionProducts]: 'Favor escolher ao menos um produto para a promoção',
  [promotionsInterface.branchesPromotions]: 'Escolher ao menos uma Filial para o produto',

}

export const editValidations = {
  [promotionsInterface.name]: (name) => isNotEmpty(name),
  [promotionsInterface.totalPrice]: (value) => isNumber(value),
  [promotionsInterface.promotionProducts]: (products) => arrayNotEmpty(products),
  [promotionsInterface.branchesPromotions]: (branches) => arrayNotEmpty(branches),
}

export const createValidations = {
  ...editValidations,
}
