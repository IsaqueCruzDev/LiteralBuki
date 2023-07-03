import "./Componente.css";

function ComponenteChat(props) {
    return (
        <div className="componente">
            <img src={props.imagem} className="imagemPerfil"/>
            <div className="segura">
                <div className="nomeHora">
                    <h3>{props.nome}</h3>
                    <p className="hora">15:30</p>
                </div>
                <p>{props.mensagem}</p>
            </div>

        </div>
    );
}

export default ComponenteChat;