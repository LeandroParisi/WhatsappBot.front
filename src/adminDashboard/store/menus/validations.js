import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import { isNotEmpty } from 'adminDashboard/store/sharedMethods/validations'

export const errorsLib = {
  [menusInterface.menuName]: 'Favor definir o nome para o menu',
  [menusInterface.description]: 'Favor definir uma descrição para o menu',
}

export const editValidations = {
  [menusInterface.menuName]: (name) => isNotEmpty(name),
  [menusInterface.description]: (name) => isNotEmpty(name),
}

export const createValidations = {
  ...editValidations,
}
