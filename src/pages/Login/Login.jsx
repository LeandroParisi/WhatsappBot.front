import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import logo from 'assets/images/logos/logo_transparent.png'
import { Button, LoginInputs } from 'components'
import useLoader from 'hooks/useLoader'
import userLogin from 'services/userLogin'
import styles from './Login.module.scss'
import inputs from './validations'

const { emailInput, passwordInput } = inputs

const Login = () => {
  const [email, setEmail] = useState(emailInput)
  const [password, setPassword] = useState(passwordInput)
  const [isDisabled, setIsDisabled] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const { validation: emailValidation, value: emailValue } = email
    const { validation: passwordValidation, value: passwordValue } = password
    if (emailValidation(emailValue) && passwordValidation(passwordValue)) {
      setIsDisabled(false)
    }
  }, [email, password])

  const handleLogin = async () => {
    const body = { email: email.value, password: password.value }
    const response = await userLogin({ body })
    if (response.status === 200) {
      history.push('/app/dashboard')
    }
  }

  return (
    <>
      {useLoader('mainLoader')}
      <div className={styles.loginPage}>
        <main className={styles.container}>
          <img src={logo} alt="logo" />
          <h1>Painel Admnistrativo</h1>

          <LoginInputs
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />

          <div className={styles.buttonContainer}>
            <Button disabled={isDisabled} onClick={handleLogin}>Login</Button>
            {/* <Button>Register</Button> */}
          </div>
        </main>
      </div>
    </>
  )
}

export default Login
