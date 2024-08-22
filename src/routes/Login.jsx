import React from 'react'
import styles from './Login.module.css'
import LoginButton from '../../components/LoginButton'

const Login = () => {
  return (
    <div className={styles.loginContainer}>

      <h2>Login</h2>

      <div className={styles.formContainer}>

        <form className={styles.form}>
          <div>
            <label className={styles.labelForm}>Usuário:</label>
            <input type='text' className={styles.inputForm} placeholder='Ex.:José' required />
          </div>

          <div>
            <label className={styles.labelForm}>Email:</label>
            <input type='text' className={styles.inputForm} placeholder='exemplo@dominio.com' required />
          </div>
          <div>
            {LoginButton()}
            </div>
            <div className={styles.forget}> 
              <a href="#">esqueci senha</a>
            </div>
        </form>
      </div>
    </div>
  )
}
export default Login
