import { LoginStyled, InformacoesLoginStyled } from "./style.jsx";
import { Link } from "react-router-dom";
import BukiLogo from "../../assets/img/bukiLogo.svg";
import { useState } from "react";

export default function Cadastro() {

  const [usuario, setUsuario] = useState({
    username: "",
    password: ""
  });

  const [login, setLogin] = useState(usuario);

  const handleChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginJson = JSON.stringify(login);
    console.log(loginJson);
  }

  return (
    <LoginStyled>
      <InformacoesLoginStyled>
        <div className="mensagem">
          <p>
            Mergulhe em uma experiência repleta de oportunidades para 
            <span>transformar suas ideias em obras-primas. </span>
          </p>
        </div>
      </InformacoesLoginStyled>

      <div className= "areaCadastrar">
        <p className= "textoCadastrar">
          Já é membro da comunidade?
          <Link to="/cadastro">
            <span className= "botaoEntrar"> Cadastrar</span>
          </Link>
        </p>
      </div>

      <div className= "areaLogin">
        <h2>Que bom te ver de novo!</h2>
        <h1>Entrar</h1>

        <div className= "divFormulario">
          <form action="post" onSubmit={handleSubmit}>
            <div className= "inputDuplo">
              <div>
                <label htmlFor="usuario">Nome de Usuário</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Nome de Usuário"
                  required
                  className= "input"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  required
                  className= "input"
                  onChange={handleChange}
                />
                <Link to="/">
                  <p className= "esqueciSenha">Esqueci minha senha</p>
                </Link>
              </div>
            </div>
              <button className="botao">Entrar</button>
          </form>
        </div>
      </div>

      <span className= "bukiHome">
        <Link to="/">
          <img src={BukiLogo} alt="" />
        </Link>
      </span>
    </LoginStyled>
  );
}
