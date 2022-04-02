/* eslint-disable no-unused-vars */
const assemblePhoneNumber = ({ whatsappNumber }, code = false) => {
  const hasNinethDigit = whatsappNumber.length === 13

  const regex = hasNinethDigit
    ? /^(\d{2})(\d{2})(\d{5})(\d{4})$/
    : /^(\d{2})(\d{2})(\d{4})(\d{4})$/

  const separatedNumber = whatsappNumber.match(regex)

  if (!separatedNumber) {
    return whatsappNumber
  }

  const [_, countryCode, stateCode, phonePrefix, phoneSufix] = separatedNumber
  const formatedPhone = `(${stateCode}) ${phonePrefix}-${phoneSufix}`
  if (code) {
    return `+${countryCode} ${formatedPhone}`
  }
  return formatedPhone
}

export default assemblePhoneNumber
