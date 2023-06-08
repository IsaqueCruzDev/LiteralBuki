import { CadastroStyled, InformacoesCadastroStyled } from "./style.jsx";
import { Link } from "react-router-dom";
import BukiLogo from "../../assets/img/bukiLogo.svg";
export default function Cadastro() {
  return (
    <CadastroStyled>
      <InformacoesCadastroStyled>
        <div className="mensagem mensagemCadastroRoxo mensagem1">
          <p>
            {" "}
            <span>Autores talentosos</span>, encontram os profissionais que
            darão vida às suas histórias.
          </p>
        </div>
        <div className="mensagem mensagem2">
          <p>
            <span>Profissionais apaixonados por livros</span>, conectam-se à
            comunidade e deixam seu legado nas co-criações.
          </p>
        </div>
        <div className="mensagem mensagemCadastroRoxo mensagem3">
          <p>
            <span>Juntos, criamos obras incríveis. Inscreva-se agora</span> e
            faça parte dessa revolução!
          </p>
        </div>
      </InformacoesCadastroStyled>

      <div className="areaEntrar">
        <p className="textoEntrar">
          Já é membro da comunidade?
          <Link to="/login">
            <span className="botaoEntrar"> Entrar</span>
          </Link>
        </p>
      </div>

      <div className="areaCadastro">
        <h1>Cadastre-se</h1>

        <div className="divFormulario">
          <form action="post">
            <div className="inputDuplo">
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome"
                  required
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="nomeUsuario">Nome de Usuário</label>
                <input
                  type="text"
                  id="nomeUsuario"
                  placeholder="Nome de Usuário"
                  required
                  className="inputNomeUsuario"
                />
              </div>
            </div>
            <label htmlFor="email">E-mail</label> <br />
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="input email"
              required
            />
            <div className="inputDuplo">
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="+8 Caracteres"
                  className="input"
                  required
                />
              </div>

              <div>
                <label htmlFor="senha">Confirmação de senha</label>
                <input
                  type="password"
                  id="confirmacaoSenha"
                  placeholder="Confirme sua senha"
                  className="input"
                  required
                />
              </div>
            </div>
            <button className="botao">Criar conta</button>
          </form>
        </div>
      </div>

      <span className= "bukiHome">
        <Link to="/">
          <img src={BukiLogo} alt="" />
        </Link>
      </span>
    </CadastroStyled>
  );
}
