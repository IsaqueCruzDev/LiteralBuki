import styles from "./ConhecaBuki.module.css";
import ImagemSection from "../../ImagemSection/ImagemSection.jsx";
import TextoSection from "../../TextoSection/TextoSection.jsx";
import Img2 from "../../../assets/img/img2.jpg";
import BotaoSection from "../../BotaoSection/BotaoSection.jsx";

function ConhecaBuki() {
  return (
    <>
      <section className= {styles.conhecaBuki}>
        <div className= {styles.conhecaBukiGrid}>
          <div>
            <ImagemSection foto={Img2} />
          </div>
          <div className= {styles.texto}>
            <TextoSection
              titulo="conheça a"
              tituloForte="BUKI"
              paragrafo="a unica plataforma do Brasil que conecta todos os profissionais que fazem um livro acontecer"
            />
            <BotaoSection texto="Fazer parte" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ConhecaBuki;
