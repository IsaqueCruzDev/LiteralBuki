import {
  NotificacaoStyled,
  SidebarStyled,
  SeguraStyled,
  MenuStyled,
  MenuHamburguerStyled,
  NavegacaoUl,
  NavegacaoOpcoesStyled
} from "./style.jsx";

// import LogoBuki from "../../assets/img/bukiLogo.svg";
import NotificacaoContent from "../../components/Notificacao/NotificacaoContent/NotificacaoContent.jsx";
import MenuIcon from "../../assets/img/Notificacoes/menu-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Aba() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <SeguraStyled>
      <SidebarStyled>
        <div className= "perfilMenu">
          <header>
            <img
              src="/src/assets/img/Notificacoes/WhatsApp Image 2023-06-10 at 22.57.43.jpeg"
             className= "fotoPerfil" />
          </header>

          <div className= "navegacao">
            <NavegacaoOpcoesStyled show={show}>
              <NavegacaoUl>
                <li className= "itemMenu">
                  <i className= "fa-solid fa-user"></i>
                  <span>Meu Perfil</span>
                </li>

                <li className= "itemMenu">
                  <i className="fa-solid fa-home"></i>
                  <span>Feed</span>
                </li>

                <li className="itemMenu">
                  <i className="fa-solid fa-comment"></i>
                  <span>Chat</span>
                </li>

                <li className="abaEscolhida itemMenu">
                  <i className="fa-solid fa-bell"></i>
                  <span>Notificações</span>
                </li>

                <li className="itemMenu">
                  <i className="fa-solid fa-lightbulb"></i>
                  <span>Meu Projeto</span>
              </li>
              </NavegacaoUl>

          <div className= "final">
            <ul>
                <li><a href="#"><i className="fa-sharp fa-solid fa-gear"></i><h4>Configurações</h4></a></li>
                  <li><a href="#"><i className="fa-sharp fa-solid fa-circle-question"></i><h4>Ajuda</h4></a></li>
                <Link to='/'>
                <li><a href="#"><i className="fa-solid fa-right-from-bracket"></i><h4>Sair</h4></a></li>
                </Link>
            </ul>
          </div>
              </NavegacaoOpcoesStyled>
          </div>

          <MenuStyled onClick={handleToggle}>
              <MenuHamburguerStyled src= {MenuIcon} />
            </MenuStyled>
        </div>
      </SidebarStyled>
      
    <NotificacaoStyled>
      <div className= "container">
        <div className= "notificacao">
          <div className= "headerDaNotificacao">
              <h1>NOTIFICAÇÕES</h1>
              <div className= "areaInput">
            <input
              type="text"
              name="busca"
              id="busca"
              placeholder="Pesquise aqui"
            />
                <i className= "fa-solid fa-magnifying-glass"></i>
                </div>
          </div>

          <div className= "notificacoes">
            <div className= "notNova">
              <h1>NOVAS</h1>
              <i className= "fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>

            <div className= "barrasNovas">
              <NotificacaoContent
                img="/src/assets/img/Notificacoes/dany.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/elliewilliams.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/harry.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/jacaerysstrong.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />
              <NotificacaoContent
                img="/src/assets/img/Notificacoes/lucerysstrong.jpeg"
                titulo="Amanda"
                acao="comentou seu post: "
                tempo="55 minutos"
                texto="Eu amo esse livro das fadas sagazes, mal posso esperar para o próximo trabalho com voce"
              />
            </div>
          </div>

          <div className= "pausaDePag">
            <div className= "verMais">
              <h1>Ver mais</h1>
              <i className="fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>
          </div>

          <div className="notificacoes">
            <div className="notNova">
              <h1>Anteriores</h1>
              <i className="fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>
          </div>

          <div className="barrasNovas">
            <NotificacaoContent
              img="/src/assets/img/Notificacoes/dany.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />
            <NotificacaoContent
              img="/src/assets/img/Notificacoes/elliewilliams.jpeg"
              titulo="Amanda"
              acao="comentou seu post: "
              tempo="55 minutos"
              texto="Eu amo esse livro das fadas sagazes, mal posso esperar para o próximo trabalho com voce"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/jacaerysstrong.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/lucerysstrong.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/pedropascal.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />
          </div>
        </div>
      </div>
      </NotificacaoStyled> 

      {/* <Link to="/">
        <div className="logo">
          <img src={LogoBuki} />
        </div>
      </Link> */}
    </SeguraStyled>
  );
}

export default Aba;
