import { formatErrorMessages } from './utils'

const validationFactory = async (body, validations, errorsLib, options = {}) => {
  const errors = {}

  const validationsArray = Object.entries(validations)

  const validationResults = await Promise.all(
    validationsArray.map(([key, validation]) => validation(body[key], { body, ...options })),
  )

  validationResults.forEach((isValid, index) => {
    if (!isValid) {
      const [key] = validationsArray[index]
      errors[key] = formatErrorMessages(errorsLib[key])
    }
  })

  if (Object.keys(errors).length) {
    return { hasErrors: true, errors }
  }

  return { hasErrors: false }
}

export default validationFactory
