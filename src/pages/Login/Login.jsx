import React, { useState, useEffect } from 'react'
import logo from 'assets/images/logos/logo_transparent.png'
import { Input, Button } from 'components'
import useLoader from 'hooks/useLoader'
import userLogin from 'services/userLogin'
import { setState, validateInput } from 'store/generalActions'
import styles from './Login.module.scss'
import inputs from './validations'

const { emailInput, passwordInput } = inputs

const Login = () => {
  const [email, setEmail] = useState(emailInput)
  const [password, setPassword] = useState(passwordInput)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    userLogin()
  }, [])

  useEffect(() => {
    const { validation: emailValidation, value: emailValue } = email
    const { validation: passwordValidation, value: passwordValue } = password
    if (emailValidation(emailValue) && passwordValidation(passwordValue)) {
      setIsDisabled(false)
    }
  }, [email, password])

  const emailSetter = setState(setEmail)
  const passwordSetter = setState(setPassword)

  return (
    <>
      {useLoader('mainLoader')}
      <div className={styles.loginPage}>
        <main className={styles.container}>
          <img src={logo} alt="logo" />
          <h1>Painel Admnistrativo</h1>

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

          <div className={styles.buttonContainer}>
            <Button disabled={isDisabled}>Login</Button>
            {/* <Button>Register</Button> */}
          </div>
        </main>
      </div>
    </>
  )
}

export default Login
