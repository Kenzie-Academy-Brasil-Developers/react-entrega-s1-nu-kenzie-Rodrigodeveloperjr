import styled from "styled-components"

export const StyleHome = styled.div`

    justify-content: center;
    min-height: 100vh;
    padding: 4rem 0;
    background: var(--Fundo-Home);

    & > div {
        
        width: 100%;
        max-width: 1050px;
        @media (min-width: 768px) {
            align-items: center;
            flex-direction: row;
        }
    }

    .content {
        gap: 2rem;
    }

    .text {
        width: 100%;
        max-width: 324px;
    }

    .botao {
        button {
            width: 100%;

            @media (min-width: 355px) {
                width: unset;
            }
        }
    }

    .image {
        margin-top: 15px;
        align-items: center;
    }
`
