import styled, { css } from "styled-components"


export const InputStyled = styled.input`

    background: var(--Header);
    border: 2px solid var(--Header);
    border-radius: 8px;
    padding: 0 16px;
    gap: 10px;

    &:focus {
        background: var(--White);
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    ${props => {

        switch(props.inputTamanho) {

            case "g":
                return css`
                    height: 52.8px;
                    width: 100%;
                    max-width: 314px;
                `
            
            case "p":
                    return css`
                    width: 100%;
                    max-width: 128px;
                    height: 48px;
                `

            default:
                return false
        }
    }}
`

export const SelectStyled = styled.select`

    background: var(--Header);
    border: 2px solid var(--Header);
    border-radius: 8px;
    padding: 0 10px;
    gap: 10px;

    width: 100%;
    max-width: 150px;
    height: 48px;

    &:focus {
        outline: none;
    }

    & > li {
        background: #F8F9FA;
        cursor: pointer;
        padding: 10px;
    }

    & > option:hover {
        background: #E9ECEF;
    }
`
