// import { Component } from 'react';
import styles from "./Header.module.css";
import { useState } from "react";
// import MenuMobile from '../../../components/MenuMobile/MenuMobile.jsx';
function Header(){
  return (
    <>
      {/* Comentário */}
      <header className= {styles.header}>
        <h1>BUKI</h1>
        <nav className= {styles.navegacao} id={styles.navegacao}>
          <ul>
            <li>
              <a href="#link">Home</a>
            </li>
            <li>
              <a href="#link">Sobre nós</a>
            </li>
            <li>
              <a href="#informacoes">Blog</a>
            </li>
            <li>
              <a href="#link">Contato</a>
            </li>
            <li>
              <a href="#link" className= {styles.botaoEntrar}>
                Entrar
              </a>
            </li>
          </ul>
        </nav>
        {/* <MenuMobile /> */}
      </header>
    </>
  );
}
export default Header;

// { menuIsVisible, setMenuIsVisible }
