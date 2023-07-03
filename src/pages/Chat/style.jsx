import styled from "styled-components";

export const ChatStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(30rem, 1fr));

    
    .seguraSessoes {
        float: left;
    }
`;

export const ChatDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 33rem;
    height: 100vh;
    margin-left: 25rem;
    border: 1px solid;
    overflow-y: auto;
    float: left;

    @media (max-width: 1000px) {
        margin-left: 0;
        margin-top: 13.3rem;
    }
`;

export const ChatConversaStyled = styled.div`
    width: 100%;
    
    .headerChat {
        border: 1px solid red;
    }

    .perfilChat img {
        width: 9rem;
        border-radius: 5rem;
    }
`;