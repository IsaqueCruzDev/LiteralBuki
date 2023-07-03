import styled from "styled-components";

export const ChatStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(30rem, 1fr));

    .seguraSessoes {
        position: relative;
        border: 1px solid red;
        max-height: 100vh;
    }
`;

export const ChatConversaStyled = styled.div`
    
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

