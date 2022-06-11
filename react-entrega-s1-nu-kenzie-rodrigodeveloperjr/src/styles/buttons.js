import styled, { css } from "styled-components"


export const TemaBotoes = styled.button`

    &:hover {
        filter: brightness(1.1);
    }

    font-weight: 500;
    font-size: 16px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .3s;

    ${props => {

        switch(props.botaoTamanho) {

            case "gg":
                return css`
                    width: 100%;
                    max-width: 314px;
                    height: 48px;
                `

            case "g":
                return css`
                    padding: 0 6.5rem;
                    height: 48px;
                `

            case "p":
                return css`
                    padding: 15px;
                    height: 40px;
                `

            default:
                return false
        }
    }}

    ${props => {

        switch(props.botaoCor) {

            case "normal":
                return css`
                    color: var(--White);
                    background: var(--Cor-Botao);
                    border: 1px solid var(--Cor-Botao);
                `
            
            case "header":
                return css`
                    color: var(--Cor-Texto-Header);
                    background: var(--Cor-Botao2);
                    border: 1.4px solid var(--Cor-Botao2);
                `

            default:
                return false
        }
    }}
`
