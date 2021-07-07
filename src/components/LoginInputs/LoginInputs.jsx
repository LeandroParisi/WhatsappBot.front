import React from 'react'
import Input from 'components/MainComponents/Input/Input'
import PropTypes from 'prop-types'
import { setState, validateInput } from 'store/generalActions'
import styles from './LoginInputs.module.scss'

const LoginInputs = ({
  email, password, setEmail, setPassword,
}) => {
  const emailSetter = setState(setEmail)
  const passwordSetter = setState(setPassword)

  return (
    <div className={styles.inputContainer}>
      <Input
        type="text"
        value={email.value}
        placeholder="E-mail"
        error={{ error: email.error, errorMessage: email.errorMessage }}
        onChange={(e) => emailSetter('value', e.target.value)}
        onBlur={() => validateInput(email.validation, email.value, setEmail)}
        onFocus={() => emailSetter('error', false)}
      />
      <Input
        type="password"
        value={password.value}
        placeholder="Password"
        error={{ error: password.error, errorMessage: password.errorMessage }}
        onChange={(e) => passwordSetter('value', e.target.value)}
        onBlur={() => validateInput(password.validation, password.value, setPassword)}
        onFocus={() => passwordSetter('error', false)}
      />
    </div>
  )
}

LoginInputs.propTypes = {
  email: PropTypes.shape().isRequired,
  password: PropTypes.shape().isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
}

export default LoginInputs
