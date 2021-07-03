import React from 'react'
import logo from 'assets/images/logos/fake_logo.png'
import { Input } from 'components'
import styles from './Login.module.scss'

const Login = () => {
  const teste = 0
  return (
    <div className={styles.loginPage}>
      <main className={styles.container}>
        <img src={logo} alt="logo" />
        <h1>Painel Admnistrativo</h1>
        <Input type="text" placeholder="E-mail" />
      </main>
    </div>
  )
}

export default Login
