import { SectionStyled, SeguraCadastroStyled } from "./style.jsx";
import Cadastro from "../../Cadastro/Cadastro.jsx";
function SectionCadastro() {
  return (
    <div>
      <SectionStyled>
        <SeguraCadastroStyled>
          <div>
            <h2 className= "tituloPrincipal">Cadastre-se agora <br /> mesmo  <br /> e faça da sua paixão, realidade</h2>
          </div>
          <div className= "divDois">
            <Cadastro />
          </div>
        </SeguraCadastroStyled>
      </SectionStyled>
    </div>
  );
}

export default SectionCadastro;
