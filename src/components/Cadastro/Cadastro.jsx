import { CadastroStyled, CadastroForm } from "./style.jsx";

// import { useState } from "react";

export default function Cadastro() {
  return (
    <CadastroStyled>
      <CadastroForm action="post">
        <h2>Cadastre-se</h2>
        <input type="text" name="nome" id="nome" placeholder="Nome" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
          required
        />
        <button id="botao">Próximo</button>
      </CadastroForm>
    </CadastroStyled>
  );
}
