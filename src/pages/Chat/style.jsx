import styled from "styled-components";

export const ChatStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(30rem, 1fr));
`;

export const SeguraSessoes = styled.div`
    max-height: 100vh;
     display: flex;

    .chat {
        width: 100%;
    }
`;

export const ChatConversaStyled = styled.div`
    padding: 0 2%;

    .perfilChat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 11rem;
    border-bottom: .1rem solid #66666650;


    }

    .perfilChat img {
        width: 8rem;
        border-radius: 5rem;
    }
    
    .seguraFoto {
        display: flex;
        align-items: center;
    }

    .areaTextoPerfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 4%;
        width: inherit;
    }

    .areaTextoPerfil h2{
        font-size: 1.9rem;
        font-weight: 400;
    }

    .areaTextoPerfil p {
        font-size: 1.4rem;
    }

    .opcoesPerfil{
        display: flex;
        justify-content: space-between;
        width: 15%;
    }

    .fa-solid {
        font-size: 2.5rem;
        color: #666;
        cursor: pointer;
    }

`;

export const ConversaStyled = styled.div`
    margin: 1% 0;

    .mensagem {
        display: flex;
        margin-top: 5rem;
    }

    .mensagem2 {
        display: flex;
        justify-content: flex-end;
        margin-top: 5rem;
    }

    .texto {
        margin-left: 1%;
        border: 1px solid black;
        width: 65%;
        padding: 1%;
        border-radius: 1rem;
    }

    .texto2 {
        margin-right: 1%;
        border: 1px solid black;
        width: 65%;
        padding: 1%;
        border-radius: 1rem;
        background-color: #8886e78f;
    }

    img {
        width: 5rem;
        border-radius: 5rem;
        height: 5rem;
    }

    p {
        font-size: 1.2rem;
    }

    .divDigitarTexto {
        margin-top: 6%;
        border: .1rem solid #000;
    }

    .divDigitarTexto input{
        height: 5.5rem;
        width: 75%;
        padding: 2rem;
        font-size: 1.6rem;
    }

    @media (max-width: 1000px) {
        margin-top: 5rem;
    }
`;

export const ChatDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 33rem;
    height: 100vh;
    margin-left: 25rem;
    overflow-y: auto;

    @media (max-width: 1000px) {
        margin-left: 0;
        margin-top: 13.3rem;
    }
`;

