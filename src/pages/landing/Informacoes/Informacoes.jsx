import styles from "./Informacoes.module.css";
import SeguraDados from "../../../components/SeguraDados/SeguraDados.jsx";
import Buki from "../../../assets/img/BUKI DOURADO.png";

function Informacoes() {
  return (
    <section className= {styles.section}>
      <div className= {styles.segura}>
        <div className= {styles.areaLogo}>
          <div className= {styles.imagemBuki}>
            <img src={Buki} alt="" />
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
