import styled from "styled-components"


export const StyledForm = styled.form`

    width: 100%;
    max-width: 363px;
    height: 351px;
    border: 1px solid var(--Cor-Botao2);
    border-radius: 4px;
    padding: 20px;
    gap: 19px;

    div > span {
        color: #868E96;
        font-weight: 400;
        font-size: 12px;
        padding-top: 5px;
    }

    div > label {
        font-weight: 400;
        margin: 15px 0;
        font-size: 12px;
        color: #212529;
    }

    & > section {
        flex-direction: row;
    }

    section > div {
        @media screen and (max-width: 330px) {
            padding: 0 5px;
        }
    }

    & > button {
        margin-top: 1.5rem;
    }
`
