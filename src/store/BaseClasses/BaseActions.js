import {
  setState,
} from 'store/sharedMethods/actions'
import { extractFiltersQuery } from 'store/sharedMethods/utils'

class BaseActions {
  constructor(provider, errorHandler, setStore) {
    this.provider = provider
    this.errorHandler = errorHandler
    this.setStore = setStore
    this.setField = setState(setStore)
  }

  async findAll(query = '') {
    const { response } = await this.errorHandler(this.provider.findAll(query))

    if (response) {
      this.setField('entities', response)
    }
  }

  saveFilters() {
    return async (filters) => {
      this.setField('query', extractFiltersQuery(filters))
    }
  }

  // update({ id, body }) {

  // }

  // activate(id) {

  // }

  // deactivate(id) {

  // }

  // delete(id) {

  // }

  // create({ body }) {
  // }
}

export default BaseActions
