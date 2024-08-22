import styles from './LoginButton.module.css'
function LoginButton() {
  return (
    <div className={styles.LoginButton}>
        <button id="button" type="submit">Entrar</button>
    </div>
  )
}

export default LoginButton
