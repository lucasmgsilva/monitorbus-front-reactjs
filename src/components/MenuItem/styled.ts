import styled from "styled-components";

export const Item = styled.article`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Text = styled.span`
    font-weight: 500;
`