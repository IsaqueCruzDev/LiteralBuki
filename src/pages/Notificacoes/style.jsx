import styled from "styled-components";

export const SeguraStyled = styled.section`
  display: flex;
`;

export const NotificacaoStyled = styled.section`
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0 3%;
  margin-left: 15rem;

  .container {
    display: inline-flex;
    justify-content: center;
    width: inherit;
    height: 100vh;
  }

  .notificacao {
    width: 80%;
    padding: 1rem 0;
    margin-top: 1rem;

  }

  .headerDaNotificacao {
    display: flex;
    justify-content: space-between;
  }

  .headerDaNotificacao h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: Bold;
    font-size: 2rem;
  }

  .headerDaNotificacao i {
    padding: 1rem 0;
    background-color: #fff;
    color: #1e1e1e;
    cursor: pointer;
  }

  .headerDaNotificacao .areaInput {
    display: flex;
  }

  .container input {
    display: inline-flex;
    justify-content: center;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
    border-width: 0.1rem;
    float: left;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  .notNova {
    display: flex;
    justify-content: space-between;
  }

  .notNova h1 {
    color: #ea6564;
    display: inline-flex;
    justify-content: center;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .notNova i {
    display: inline-flex;
    justify-content: center;
    color: #ea6564;
    cursor: pointer;
    margin-top: 2.6rem;
  }

  .notNova i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: all 400ms ease-in-out;
  }

  .barrasNovas {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
  }

  .barrasNovas img {
    width: 10rem;
    border-radius: 10rem;
    margin-right: 2rem;
    border: solid 0.2rem #8886e7;
  }

  .notAnt {
    display: inline-flex;
    justify-content: center;
  }

  .notAnt h1 {
    color: #ea6564;
    display: inline-flex;
    justify-content: center;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .notAnt i {
    display: inline-flex;
    justify-content: center;
    color: #ea6564;
    cursor: pointer;
    margin-top: 2.6rem;
  }

  .notAnt i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: 400ms;
  }

  .barrasAnteriores {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .barrasAnteriores img {
    width: 10rem;
    border-radius: 10rem;
    margin-right: 2rem;
    border: solid 0.2rem #8886e7;
  }

  .barrasDeNotAnt {
    display: inline-flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 5px;
    border-bottom: solid 2px #8886e7;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    margin-top: 5px;
  }

  .barrasDeNotAnt:hover {
    background: #e0dfed;
  }

  .barrasDeNotAnt .descricao h1 {
    font-size: 18px;
    font-style: bold;
    margin-bottom: 5px;
  }

  .barrasDeNotAnt .descricao h1 span {
    font-size: 13px;
    opacity: 60%;
  }

  .barrasDeNotAnt .descricao p span {
    border-bottom: solid 1px #8886e7;
    cursor: pointer;
    color: #8886e7;
  }

  .barrasDeNotAnt .descricao p span:hover {
    color: #6260cc;
  }

  #hora-not {
    font-size: 13px;
    opacity: 60%;
    margin-top: 5px;
  }

  .verMais {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .verMais h1 {
    color: #ea6564;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .verMais i {
    display: inline-flex;
    color: #ea6564;
    cursor: pointer;
    margin-top: 26px;
    margin-bottom: 26px;
    margin-left: 6px;
  }

  .verMais i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: 400ms;
  }

  @media (max-width: 1000px) {
    margin-top: 12rem;
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 0 3%;
    margin-left: 0;

    .notificacao {
      width: inherit;
      padding: 1rem 1rem;
      justify-content: center;
    }
  }
`;

export const SidebarStyled = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 25rem;
  align-items: center;
  padding: 1rem 1rem;
  border-right: 1px solid #ada8a8;
  position: fixed;
  background: #fff;

  .fotoPerfil {
    width: 15rem;
    border-radius: 10rem;
    margin-right: 5rem;
    transition: transform 0.5s;
    margin-left: 2rem;
  }

  .fotoPerfil:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0.1rem 3rem #5856dc;
  }

  .abaEscolhida {
    border-radius: 10rem;
    background-color: #c0bff2;
    color: #1e1e1e;
  }

  .abaEscolhida i {
    color: #3b2480;
  }

  i {
    color: #705ea8;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    line-height: 3rem;
    color: #1e1e1e;
    margin-bottom: 5rem;
  }

  .navegacao {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 89rem;
  }

  @media (max-width: 1000px) {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    border-right: 0;
    border-bottom: 0.1rem solid #ada8a8;
    min-height: 0;
    max-height: 20rem;
    width: 100%;
    background-color: #fff;
    z-index: 9999;

    .perfilMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 10rem;
      padding: 0.5rem;
    }

    .fotoPerfil {
      width: 8rem;
      border-radius: 10rem;
      margin-right: 5rem;
      transition: transform 0.5s;
      margin-left: 2rem;
    }

    .navegacao {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0;
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .perfilMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 10rem;
      padding: 0.5rem;
      max-height: 13rem;
    }
  }
`;

export const NavegacaoUl = styled.ul`
  list-style: none;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

   .itemMenu {
    padding: 1.3rem;
    margin-top: 1rem;
    border-radius: 10rem;
    transition: all 200ms ease-in-out;
  }

   .itemMenu span {
    cursor: pointer;
  }

   .itemMenu:hover {
    background-color: #c0bfd2;
    box-shadow: 0 0.1rem 1rem #9795e9;
  }

   .itemMenu i {
    margin-right: 1rem;
  }

   li {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: inherit;

    li {
      display: inline;
      padding: 0.8rem 1rem;
      flex-direction: row;
      margin: 1%;
      border-radius: 10rem;
      transition: all 200ms ease-in-out;
      font-size: 1.8rem;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 800px) {
    li {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: inherit;

      li {
      display: block;
      padding: 0.8rem 1rem;
      margin: 1%;
      border-radius: 10rem;
      transition: all 200ms ease-in-out;
      font-size: 1.8rem;
      margin-top: 0.5rem;
    }
    }

  @media (max-width: 680px) {
      flex-wrap: wrap;

      li {
      font-size: 1.6rem;
    }
  }
`;

export const NavegacaoOpcoesStyled = styled.div`

.final {
    display: flex;
    flex-direction: column;
  }

  .final ul {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-left: .8rem;
  }

   .final a {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    color: #666666;
    display: inline-flex;
    margin: 0.1rem;
  }

   .final i {
    padding: 0.5rem;
  }

   .final a:hover {
    color: #1e1e1e;
  }

   .final i:hover {
    color: #3b2480;
  }

@media (max-width: 1000px) {
  flex-direction: column;

  .final {
      display: none;
      flex-direction: column;
    }
}

@media (max-width: 700px) {

      display: ${({ show }) => show ? 'block' : 'none'};
      align-items: center;
      width: inherit;
      flex-wrap: wrap;
      /* border: 1px solid #5856dc; */
      position: absolute;
      right: 2.2rem;
      top: 10rem;
      width: 25rem;
      z-index: 9998;
      background-color: #fff;
      box-shadow: 0 .5rem 4rem #5856dc;

    .final {
    display: block;
    flex-direction: column;
    margin-top: 2rem;
  }

  .final ul {
    margin-left: 1rem;
  }

}

`;

export const MenuStyled = styled.div`
  margin-right: 3%;
  cursor: pointer;
  display: none;
  z-index: 9999;
  img {
    width: 4.5rem;
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

export const MenuHamburguerStyled = styled.img``;
