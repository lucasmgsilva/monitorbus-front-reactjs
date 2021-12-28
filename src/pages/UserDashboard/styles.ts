import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1160px;
    margin: 0 auto;
`

export const UserInfo = styled.div`
    background-color: var(--secondary);
    height: 525px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
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
    display: flex;
    flex: 1;
    

`

export const UserImageContainer = styled.div`
    flex: 1.5;
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px;
`

export const UserImage = styled.img`
    border-radius: 50%;
    border: 5px solid var(--secondary);
    width: 350px;
    height: 350px;
`

export const UserData = styled.div`
    flex: 2;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const Title = styled.h1`
    font-size: 2.5rem;
    font-family: 'Vujahday Script', sans-serif;
    text-align: center;
    padding-top: 15px;
`

export const InfoLabel = styled.p`
    font-weight: bold;
`

export const InfoData = styled.p`
    padding-bottom: 25px;
    font-style: italic;
`