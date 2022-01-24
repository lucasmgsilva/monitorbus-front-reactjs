import styled from "styled-components";

export const Control = styled.article`
    width: auto;
    background-color: var(--white);
    color: var(--secondary);
    padding: 10px 25px;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    border: 3px solid var(--primary);
    border-radius: 10px;
    cursor: pointer;
`;

export const Text = styled.p`
    padding-left: 15px;
`

export const Image = styled.img`
    width: 50px;
`