import styled from "styled-components"

export const StyledHeader = styled.header`

    background: var(--Header);
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

    width: 100%;
    height: 88px;

    & > div {
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
`
