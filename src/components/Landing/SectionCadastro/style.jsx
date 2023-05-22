import styled from "styled-components";
import background from "../../../assets/img/background.png";

export const SectionStyled = styled.section`
    background:  linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${background});
`;

export const SeguraCadastroStyled = styled.div`
    min-height: 90vh;
    padding: 0 9%;
    display: grid;
    align-items: center;
    column-gap: 20rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

    div .tituloPrincipal {
        font-family: "Prata", sans-serif;
        color: #fff;
        font-size: 5rem;
        font-weight: 400;
    }
    
    .divDois{
        width: 30rem;
    }
`;

