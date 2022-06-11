import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    :root {
        --Fundo-Home: #212529;
        --White: #fff;
        --Cor-Botao: #FD377E;
        --Cor-Botao2: #E9ECEF;
        --Header: #F8F9FA;
        --Cor-Texto-Header: #5B6166;
    }

    button {
        cursor: pointer;
        border: 0;
        background: transparent;
    }

    ul, ol, li {
        list-style: none
    }

    img {
        max-width: 100%;
    }

    section, aside, div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

export const Container = styled.div`

    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1rem;
`
