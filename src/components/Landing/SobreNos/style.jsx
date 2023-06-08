import styled from "styled-components";

export const SobreNosStyled = styled.section`
    background-color: #D9D9D9;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;

    h2 {
        text-align: center;
        font-family: "Prata", poppins, sans-serif;
        font-size: 6rem;
        font-weight: 400;
        color: var(--primary-color);
    }

    p {
        color: var(--primary-color);
        font-size: 1.8rem;
    }

    p span {
        font-weight: 600;
    }

    @media (max-width: 900px) {
        p {
            text-align: center;
            padding-bottom: 2rem;
        }

    }
`;

export const SobreNosDivStyled = styled.div`
    padding: 0 9%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SobreNosTextStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    column-gap: 5rem;
`;

export const AreaFotoStyled = styled.div`
    width: 43rem;
    margin: 0 auto;

    p {
        font-size: 1.4rem;
    }
`;

export const EquipeBukiStyled = styled.img`
    width: inherit;
`;


