import { CadastroStyled, InformacoesCadastroStyled } from "./style.jsx";
import { Link } from "react-router-dom";
import BukiLogo from "../../assets/img/bukiLogo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [senhaMatch, setSenhaMatch] = useState(true);

  const [confirmaSenha, setConfirmaSenha] = useState("");

  const confirmacaoSenha = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const [usuario, setUsuario] = useState({
    nome: "",
    usuario: "",
    email: "",
    senha: "",
  });

  const [cadastro, setCadastro] = useState(usuario);

  const cadastrar = () => {
    fetch("http://localhost:8080/usuario", {
      method: "post",
      body: JSON.stringify(cadastro),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        console.log(retorno_convertido);
        navigate("/login");
      });
  };

  const handleChange = (e) => {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cadastro.senha !== confirmaSenha) {
      setSenhaMatch(false);
      return;
    }

    if (cadastro.senha.length < 8) {
      setSenhaMatch(false);
      return;
    }
    cadastrar();
  };

  return (
    <CadastroStyled>
      <InformacoesCadastroStyled>
        <div className="mensagem mensagemCadastroRoxo mensagem1">
          <p>
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
          <form action="post" onSubmit={handleSubmit}>
            <div className="inputDuplo">
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  required
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nomeUsuario">Nome de Usuário</label>
                <input
                  type="text"
                  name="usuario"
                  id="nomeUsuario"
                  placeholder="Nome de Usuário"
                  required
                  className="inputNomeUsuario"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="email">E-mail</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="input email"
              onChange={handleChange}
              required
            />
            <div className="inputDuplo">
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="+8 Caracteres"
                  className="input"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="senha">Confirmação de senha</label>
                <input
                  type="password"
                  id="confirmacaoSenha"
                  name="confirmacaoSenha"
                  placeholder="Confirme sua senha"
                  className="input"
                  onChange={confirmacaoSenha}
                  required
                />
              </div>
            </div>
            {!senhaMatch && (
              <p className="senhaMatchError">
                As senhas não correspondem ou a senha não possui pelo menos 8
                caracteres.
              </p>
            )}
            <button className="botao">Criar conta</button>
          </form>
        </div>
      </div>

      <span className="bukiHome">
        <Link to="/">
          <img src={BukiLogo} />
        </Link>
      </span>
    </CadastroStyled>
  );
}
