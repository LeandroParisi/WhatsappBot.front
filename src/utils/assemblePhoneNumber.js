/* eslint-disable no-unused-vars */
const assemblePhoneNumber = ({ whatsappNumber }, code = false) => {
  const [_, countryCode, stateCode, phonePrefix, phoneSufix] = whatsappNumber.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)
  const formatedPhone = `(${stateCode}) ${phonePrefix}-${phoneSufix}`
  if (code) {
    return `+${countryCode} ${formatedPhone}`
  }
  return formatedPhone
}

export default assemblePhoneNumber
