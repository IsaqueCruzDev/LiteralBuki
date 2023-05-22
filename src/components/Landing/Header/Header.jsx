// import { Component } from 'react';
import {
  HeaderStyled,
  MenuStyled,
  MenuContentStyled,
  MenuIconStyled
} from "./style.jsx";

import menu from "../../../assets/img/iconmenu.svg";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  }
  return (
    <>
      <HeaderStyled>
        <h1>BUKI</h1>
        <MenuStyled show={show}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>          
            <a href="#">Contato</a>
          </li>
          <li>  
            <a href="#">Entrar</a>
          </li>
        </MenuStyled>

        <MenuContentStyled>
          <MenuIconStyled onClick={toggleMenu} src={menu} width="24px"/>
        </MenuContentStyled>
      </HeaderStyled>
    </>
  );
}
export default Header;

// { menuIsVisible, setMenuIsVisible }
