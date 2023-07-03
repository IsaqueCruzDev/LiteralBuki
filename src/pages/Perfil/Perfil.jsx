import Section from "./style";
import Back from "../../assets/img/perfilembacado.png";


export default function Perfil () {
    return (
        <Section>
            <div className="emBreve">
                <h1>Em Desenvolvimento</h1>
            </div>
            <img src= {Back} />
        </Section>
    )
}