import React from 'react'
import logo from 'assets/images/logos/logo_zoom_transparent.png'
import { Input, Button } from 'components'
import styles from './Login.module.scss'

const Login = () => {
  const teste = 0
  return (
    <div className={styles.loginPage}>
      <main className={styles.container}>
        <img src={logo} alt="logo" />
        <h1>Painel Admnistrativo</h1>

        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />

        <div className={styles.buttonContainer}>
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </main>
    </div>
  )
}

export default Login
