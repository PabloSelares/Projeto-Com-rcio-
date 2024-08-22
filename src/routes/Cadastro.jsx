import React from "react";
import styles from "./Login.module.css";
import CadastroButton from "../../components/CadastroButton";
function Cadastro() {
  return (
    <div className={styles.loginContainer}>
      <h2>Cadastrar</h2>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.labelCampos}>
            <label className={styles.labelForm}>Nome Completo:</label>
            <input
              type="text"
              className={styles.inputForm}
              placeholder="Ex.: José da Silva"
              required
            />
          </div>

          <div className={styles.labelCampos}>
            <label className={styles.labelForm}>Email:</label>
            <input
              type="email"
              className={styles.inputForm}
              placeholder="exemplo@dominio.com.br"
              required
            />
          </div>

          <div className={styles.labelCampos}>
            <label className={styles.labelForm}>Senha:</label>
            <input type="password" className={styles.inputForm} required />
          </div>

          <div>{CadastroButton()}</div>

          <div className={styles.link}>
            <a href="#">Ainda não possui uma conta? Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
