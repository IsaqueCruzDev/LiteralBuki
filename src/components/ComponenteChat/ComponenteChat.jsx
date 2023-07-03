function ComponenteChat(props) {
    return (
        <div className="componente">
            <img src={props.imagem} />
            <div>
                <h3>{props.nome}</h3>
                <p>{props.mensagem}</p>
            </div>

        </div>
    );
}

export default ComponenteChat;