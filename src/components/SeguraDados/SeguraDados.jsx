import DadosInformacoes from "../DadosInformacoes/DadosInformacoes.jsx";
import styles from "./SeguraDados.module.css";
import IconEspecialistas from "../../assets/img/icon especialistas.png";
import IconPassos from "../../assets/img/pes.png";
import IconTempo from "../../assets/img/icon tempo.png";

function SeguraDados() {
    return (
        <div className= {styles.segura}>
           <DadosInformacoes
            imagem={ IconEspecialistas}
            titulo="Especialistas"
            paragrafoForte="A um toque de distância"
            paragrafo="
            escritores, capistas, redatores,
            designers, profissionais de marketing e editores."
          />
        <DadosInformacoes 
            imagem={ IconPassos }
            titulo="O primeiro passo para sua 
            independência criativa e financeira"
            paragrafoForte="O controle é seu!"
            paragrafo="nosso objetivo é encurtar o seu caminho para o sucesso e permitir que você receba o retorno que merece."
          />
        <DadosInformacoes
            imagem={ IconTempo }
            titulo="Menos tempo da ideia à execução"
            paragrafoForte="Na Buki, você faz o processo todo em um só lugar."
            paragrafo="da ideia brilhante até a versão final, todos os passos numa única plataforma"
          />
        </div>
    )
}

export default SeguraDados;