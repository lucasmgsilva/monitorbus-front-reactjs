import styled from 'styled-components';

export const StudentSection = styled.section`
    background-color: var(--secondary);
    padding: 25px;
    color: var(--secondary);
`
export const StudentID = styled.div`
    background-color: var(--white);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const StudentIDBody = styled.div`
    font-size: 1rem;
    display: flex;
    flex: 1;
`

export const StudentImageContainer = styled.div`
    flex: 1.2;
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
`

export const StudentImage = styled.img`
    border-radius: 50%;
    border: 5px solid var(--secondary);
    width: 300px;
    height: 300px;
`

export const StudentData = styled.div`
    flex: 2;
    padding: 10px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const Title = styled.h1`
    font-size: 2.3rem;
    font-family: 'Indie Flower', cursive;
    text-align: center;
    padding-top: 20px;
`

export const InfoLabel = styled.p`
    font-weight: bold;
`

export const InfoData = styled.p`
    padding-bottom: 25px;
    font-style: italic;
`