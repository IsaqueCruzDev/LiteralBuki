import styled from "styled-components";

export const ChatStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(50rem, 1fr));
`;

export const ChatDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 33rem;
    height: 100vh;
    margin-left: 25rem;
    border: 1px solid;

    @media (max-width: 1000px) {
        margin-left: 0;
        margin-top: 13.3rem;
    }
`;