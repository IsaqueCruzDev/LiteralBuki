import { LoginStyled, InformacoesLoginStyled } from "./style.jsx";
import { Link } from "react-router-dom";
import BukiLogo from "../../assets/img/bukiLogo.svg";
export default function Cadastro() {
  return (
    <LoginStyled>
      <InformacoesLoginStyled>
        <div className= "mensagem">
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
          <form action="post">
            <div className= "inputDuplo">
              <div>
                <label htmlFor="nomeUsuario">Nome de Usuário</label>
                <input
                  type="text"
                  id="nomeUsuario"
                  placeholder="Nome de Usuário"
                  required
                  className= "input"
                />
              </div>
              <div>
                <label htmlFor="nomeUsuario">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Senha"
                  required
                  className= "input"
                />
                <Link to="/">
                  <p className= "esqueciSenha">Esqueci minha senha</p>
                </Link>
              </div>
            </div>
            <Link to='/perfil'>
              <button className="botao">Entrar</button>
              </Link>
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
