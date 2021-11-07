import { menusInterface } from 'shared/interfaces/menus/menusInterface'
import promotionsInterface from 'shared/interfaces/promotions/promotionsInterface'
import {
  arrayNotEmpty, isNotEmpty, isNumber, isPositiveNumber,
} from 'adminDashboard/store/sharedMethods/validations'
import couponsInterface from 'shared/interfaces/coupons/couponsInterface'
import toSnakeCase from 'shared/services/utils/toSnakeCase'

const extractSelectedConditions = (conditions, coupomConditions) => new Set(conditions
  .filter((condition) => coupomConditions.has(condition.id))
  .map(({ name }) => name))

const validateConditionValue = (value) => isNumber(value) && isPositiveNumber(value)

const validateConditionLimit = (value, body, fieldKey, conditions) => {
  const { coupomConditions } = body
  const selectedConditions = extractSelectedConditions(conditions, coupomConditions)
  if (selectedConditions.has(toSnakeCase(fieldKey))) return validateConditionValue(value)
  return true
}

export const errorsLib = {
  [couponsInterface.coupomCode]: 'O código não pode conter espaços',
  [couponsInterface.discount]: 'Deve conter somente números e pontos',
  [couponsInterface.priceLimit]: 'Deve conter somente números e pontos',
  [couponsInterface.distanceLimit]: 'Deve conter somente números e pontos',
  [couponsInterface.usesLimit]: 'Deve conter somente números e pontos',
  [couponsInterface.dateLimit]: 'Deve ser uma data válida',

}

export const editValidations = {
  [couponsInterface.coupomCode]: (code) => !/[ ]/.test(code.trim()) && isNotEmpty(code),
  [couponsInterface.discount]: (value) => isNumber(value),
  [couponsInterface.priceLimit]: (value, { body, conditions }) => (
    validateConditionLimit(value, body, couponsInterface.priceLimit, conditions)),
  [couponsInterface.distanceLimit]: (value, { body, conditions }) => (
    validateConditionLimit(value, body, couponsInterface.distanceLimit, conditions)),
  [couponsInterface.usesLimit]: (value, { body, conditions }) => (
    validateConditionLimit(value, body, couponsInterface.usesLimit, conditions)),
  [couponsInterface.dateLimit]: (value, { body, conditions }) => (
    validateConditionLimit(value, body, couponsInterface.discount, conditions)),
}

export const createValidations = {
  ...editValidations,
}
