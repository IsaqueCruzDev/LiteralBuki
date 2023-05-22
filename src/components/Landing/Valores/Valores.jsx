import styles from "./Valores.module.css";
import Buki from "../../../assets/img/DesinLogoBrancaCompleta.svg";
import Valor36px from "../../PalavrasValores/Valor36px/Valor36px.jsx";
import Valor38px from "../../PalavrasValores/Valor38px/Valor38px.jsx";
import Valor45px from "../../PalavrasValores/Valor45px/Valor45px.jsx";
import Valor55px from "../../PalavrasValores/Valor55px/Valor55px.jsx";
import Valor120px from "../../PalavrasValores/Valor120px/Valor120px.jsx";

function Valores() {
  return (
    <section className= {styles.valoresSection}>
      <div className= {styles.container}>
        
        <div className= {styles.box}>
          <Valor38px palavra="Visibilidade" />
        </div>

        <div className= {styles.box}>
          <Valor38px palavra="Visibilidade" />
        </div>

        <div className= {styles.areaImagem}>
          <img className= {styles.imagemBuki} src={Buki} />
        </div>

      </div>
    </section>
  );
}

export default Valores;

{
  /* <Valor36px palavra="" />
        <Valor38px palavra=""/>
        <Valor45px palavra=""/>
        <Valor55px palavra=""/>
        <Valor120px palavra=""/> */
}
