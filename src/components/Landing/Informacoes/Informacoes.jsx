import styles from "./Informacoes.module.css";
import SeguraDados from "../../SeguraDados/SeguraDados.jsx";
import BukiLogo from "../../../assets/img/bukiLogo.svg";

function Informacoes() {
  return (
    <section className= {styles.section}>
      <div className= {styles.segura}>
        <div className= {styles.areaLogo}>
          <div className= {styles.imagemBuki}>
            <img className= {styles.bukiSvg } src={BukiLogo} alt="Logo da marca BUKI" />
          </div>
          <h1 className= {styles.subtituloLogo}>Uma página de cada vez </h1>
        </div>

        <div className= {styles.areaDados}>
          <SeguraDados/>
        </div>
      </div>
    </section>
  );
}

export default Informacoes;
