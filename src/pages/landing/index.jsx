// import React from "react";
import ComoArtista from "../../components/Landing/ComoArtista/ComoArtista.jsx";
import ConhecaBuki from "../../components/Landing/ConhecaBuki/ConhecaBuki.jsx";
import Header from "../../components/Landing/Header/Header.jsx";
import Valores from "../../components/Landing/Valores/Valores.jsx";
import Informacoes from "../../components/Landing/Informacoes/Informacoes.jsx";
import SectionCadastro from "../../components/Landing/SectionCadastro/SectionCadastro.jsx";
import SobreNos from "../../components/Landing/SobreNos/SobreNos.jsx";
import Footer from "../../components/Landing/Footer/Footer.jsx";

export default function Landing() {
  return (
    <>      
      <Header />
      <ComoArtista />
      <ConhecaBuki />
      <Informacoes />
      <Valores />
      <SectionCadastro />
      <SobreNos />
      <Footer />
    </>
  );
}

