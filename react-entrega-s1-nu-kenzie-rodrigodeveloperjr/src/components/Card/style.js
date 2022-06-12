import styled from "styled-components"
import lixeira from "../../assets/lixeira.png"
import lixeira_hover from "../../assets/lixeira-hover.png"

export const StyledCard = styled.div`

    width: 100%;
    max-width: 560px;
    height: 87px;

    background: #F8F9FA;
    border-radius: 4px;
    margin: 5px 0;

    flex-direction: row;

    &:hover {
        background: var(--White);
        box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
    }

    & > hr {
        width: 4px;
        height: 87px;
        margin: 0;
        border: none;
        border-radius: 4px 0px 0px 4px;
    }

    .divDentroCard {
        display: flex;
        max-width: 535px;
        width: 100%;

        flex-direction: row;
    }

    .divDentroCard > div {
        display: flex;
    }

    .divNomeCompra {
        margin-left: 15px;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        color: #212529;
    }

    .divNomeCompra > span {
        font-weight: 400;
        font-size: 12px;
        color: #343A40;
    }

    .nomeCompra {
        margin: 10px 0 15px 0;
    }

    .divPreco {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
    }

    .preco {
        margin-top: 15px;
        margin-left: 100px;
        font-weight: 400;
        font-size: 12px;
    }

    @media screen and (max-width: 510px) {
        .preco {
            margin-left: 0;
        }
    }

    .divPreco > div {
        width: 22px;
        height: 22px;
        margin: 15px 10px 0 0;
        cursor: pointer;
        background: #E9ECEF;
        background: url(${lixeira});

        font-size: 12px;
    }

    .divPreco > div:hover {
        background: url(${lixeira_hover});
    }
`
