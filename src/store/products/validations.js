/* eslint-disable import/no-named-as-default-member */
/* eslint-disable consistent-return */
import productsInterface from 'interfaces/products/productsInterface'
import {
  arrayNotEmpty,
  isNotEmpty, isNumber, isPositiveNumber, setNotEmpty,
} from 'store/sharedMethods/validations'

const validateAttributes = (attributes) => {
  if (attributes.length) {
    const areAttributesValid = attributes.map(({ options }) => {
      const isValid = options.every(({ name, price }) => (
        isNotEmpty(name) && isNumber(price)
      ))
      return isValid
    })
    return areAttributesValid.every((isValid) => isValid === true)
  }
  return true
}
export const errorsLib = {
  [productsInterface.name]: 'Favor escolher um nome',
  [productsInterface.basePrice]: 'Este campo deve ser um valor numérico',
  [productsInterface.categoryId]: 'Escolher uma categoria',
  [productsInterface.attributes]: 'Todos os attributos devem ter AO MENOS um nome e um preço maior ou igual a 0',
  [productsInterface.branchesProducts]: 'Escolher ao menos uma Filial para o produto',

}

export const editValidations = {
  [productsInterface.categoryId]: (category) => isPositiveNumber([...category][0]),
  [productsInterface.name]: (name) => isNotEmpty(name),
  [productsInterface.basePrice]: (value) => isNumber(value),
  [productsInterface.attributes]: (attributes) => validateAttributes(attributes),
  [productsInterface.branchesProducts]: (branches) => arrayNotEmpty(branches),
}

export const createValidations = {
  ...editValidations,
}
