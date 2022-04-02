const assembleUserName = ({ firstName, middleName, lastName }) => `
  ${firstName}${middleName ? ` ${middleName}` : ''}${lastName ? ` ${lastName}` : ''}
`

export default assembleUserName
