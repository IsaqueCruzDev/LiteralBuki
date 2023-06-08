import {
    SobreNosStyled,
    SobreNosDivStyled,
    EquipeBukiStyled,
    SobreNosTextStyled,
    AreaFotoStyled
} from "./style.jsx";

import equipeBuki from "../../../assets/img/equipeBuki.png";
export default function SobreNos() {
    return (
        <SobreNosStyled>
            <SobreNosDivStyled>
            <h2>Quem Somos Nós?</h2>
                <SobreNosTextStyled>
                <p> <span>A BUKI nasceu da colaboração de oito jovens fascinados por 
                    tecnologia e leitura. <br />
                    Alunos do Instituto PROA,</span>  vimos em nossas mãos a oportunidade de devolver à uma comunidade todo o incentivo que recebemos. 
                    Daí, surgiu a ideia de uma plataforma pioneira no Brasil, feita 
                    especificamente para que autores pudessem se conectar com
                    profissionais que levem a arte deles à outro patamar,
                    de uma forma dinâmica e com total controle sobre suas obras,
                    inserindo-os no mercado editorial e os tornando profissionais muito mais completos e atrativos, com bagagem e experiência de negócio, proporcionando independência e poder de escolha.
                    </p>

                    <AreaFotoStyled >
                    <EquipeBukiStyled src={equipeBuki} />
                        <p>Da esquerda para a direita: Matheus, Amanda, Isaque, Leonardo, Guilherme, Raquel. A baixo: Arthur e Lucas.</p>

                    </AreaFotoStyled>
                </SobreNosTextStyled>
            </SobreNosDivStyled>
        </SobreNosStyled>
    )
}

