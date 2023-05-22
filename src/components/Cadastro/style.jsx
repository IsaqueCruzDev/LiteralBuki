import styled from "styled-components";

export const CadastroStyled = styled.div`
    width: 35rem;
    min-height: 45rem;
    background-color: #fff;
    border-radius: 4.5rem;
`;

export const CadastroForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3rem;

    h2 {
        margin-bottom: 1.5rem;
        font-size: 3.5rem;
        color: var(--primary-color);
        font-family: "Prata", sans-serif;
    }

    input {
        width: 100%;
        height: 5rem;
        box-shadow: 0 .2rem .8rem;
        margin-bottom: 3.5rem;
        padding: 1.5rem;
        border-radius: 2.5rem;
        font-size: 1.7rem;
    }

    button {
        border-radius: 2.5rem;
        margin-top: 1rem;
        cursor: pointer;
        min-width: 8rem;
        padding: 1.5rem;
        align-self: center;
        background-color: var(--yellow);
        font-weight: bold;
        font-family: "Prata", sans-serif;
        color: #fff;
        line-height: 1rem;
        letter-spacing: .2rem;
    }
`;