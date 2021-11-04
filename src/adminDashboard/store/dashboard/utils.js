/* eslint-disable import/prefer-default-export */

import orderStatus from 'shared/interfaces/orders/orderStatus'
import toSnakeCase from 'shared/services/utils/toSnakeCase'

export const extractNextStatus = (currentStep, type) => {
  let nextStatus = ''
  if (type === 'back') {
    nextStatus = orderStatus[currentStep - 1] || 'placed'
  } else {
    nextStatus = orderStatus[currentStep + 1] || 'fullfilled'
  }

  return toSnakeCase(nextStatus)
}
