import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form className={styles.form}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          ></input>
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            required
            placeholder="Email do usuário"
          ></input>
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          ></input>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          ></input>
        </label>
        <button className="btn" onSubmit="">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
