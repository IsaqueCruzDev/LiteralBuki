import ChatStyled from "./style";
import Back from "../../assets/img/chatembacado.png";


export default function Chat () {
    return (
        <ChatStyled>
            <div className="emBreve">
                <h1>Em Breve!</h1>
            </div>
            <img src= {Back} />
        </ChatStyled>
    )
}