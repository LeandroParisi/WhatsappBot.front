import validateEmail from 'shared/utils/validateEmail'

const inputs = {
  emailInput: {
    value: '',
    errorMessage: 'Email inválido',
    error: false,
    validation: (email) => validateEmail(email),
  },
  passwordInput: {
    value: '',
    errorMessage: 'Senha inválida',
    error: false,
    validation: () => true,
  },
}

export default inputs
