/* eslint-disable import/prefer-default-export */

export const extractNextStatus = (currentStep, type) => {
  let nextStatus = 0
  if (type === 'back') {
    nextStatus = currentStep - 1
  } else {
    nextStatus = currentStep + 1
  }

  return nextStatus
}
