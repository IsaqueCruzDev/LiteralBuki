import React from "react";
import ComoArtista from "./ComoArtista/ComoArtista";
import ConhecaBuki from "./ConhecaBuki/ConhecaBuki";
import Header from "./Header/Header";
import Valores from "./Valores/Valores";
import Informacoes from "./Informacoes/Informacoes";

function Landing() {
  return (
    <>
      <Header />
      <ComoArtista />
      <ConhecaBuki />
      <Informacoes />
      <Valores />
    </>
  );
}

export default Landing;
