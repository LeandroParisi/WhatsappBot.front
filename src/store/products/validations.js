import productsInterface from 'interfaces/products/productsInterface'
import { isNotEmpty, isNumber, setNotEmpty } from 'store/sharedMethods/validations'

export const errorsLib = {
  [productsInterface.name]: 'Favor escolher um nome',
  [productsInterface.basePrice]: 'Favor escolher um valor',
  [productsInterface.categoryId]: 'Escolher uma categoria',

}

export const editValidations = {
  [productsInterface.categoryId]: (category) => setNotEmpty(category),
  [productsInterface.name]: (name) => isNotEmpty(name),
  [productsInterface.basePrice]: (value) => isNumber(value),
  // [productsInterface.attributes]: '',
}
