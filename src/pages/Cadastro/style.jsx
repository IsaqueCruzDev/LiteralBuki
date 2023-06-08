import styled from "styled-components";
import BackgroundCadastro from "../../assets/img/backgroundCadastro.jpg";
export const CadastroStyled = styled.section`
    
    .areaEntrar{
        display: flex;
        justify-content: flex-end;
    }

    .textoEntrar {
        font-size: 1.4rem;
        justify-content: flex-end;
        padding: 2rem;
        color: #042A3F;
    }

    .botaoEntrar {
        color: #F74B35;
        font-weight: 600;
    }

    /* FIM ENTRAR */

    .areaCadastro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 7%;
    }

    .areaCadastro h1 {
        font-size: 3.6rem;
        color: #042A3F;
    }

    .divFormulario label {
        color: #042A3F;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 2rem;
    }

    .divFormulario input {
        width: inherit;
        background-color:#F0EBEB;
        height: 5rem;
        border-radius: 1.5rem;
        padding: 2rem;
        font-size: 1.6rem;
        font-weight: 600;
        margin-top: .8rem;
        color: #042A3F;
    }

    .divFormulario .email {
        margin-bottom: 4rem;
    }

    .divFormulario input::placeholder {
        font-size: 1.6rem;
    }

    .inputDuplo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 3.6rem;
    }

    .divFormulario .inputNome, .divFormulario .inputNomeUsuario, .divFormulario .input  {
        width: 90%;
    }

    form .botao {
        background-color: #8886E7;
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 2.2rem;
        text-align: center;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 1.5rem;
    }

    .bukiHome {
        position: absolute;
        right: 3rem;
        bottom: 1rem;
    }
`;

export const InformacoesCadastroStyled = styled.section`
    width: 45rem;
    height: 100vh;
    background-image: url(${BackgroundCadastro});
    background-size: cover;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .mensagem {
        width: 41rem;
        border-radius: 1.5rem;
        height: 11.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mensagem p{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 200;
    }

    .mensagem p span{
        font-weight: 400;
    }

    .mensagem1, .mensagem3 p{
        padding: 0 2rem;
    }

    .mensagemCadastroRoxo {
        background-color: #8886E7;
        position: relative;
        left: -1rem;
    }

    .mensagem2{
        background: #EA6564;
        position: relative;
        right: -4rem;
        border-radius: 1.5rem 0 0 1.5rem;
    }

    .mensagem2 {
        text-align: right;
        padding: 0 2rem;
    }

`;
