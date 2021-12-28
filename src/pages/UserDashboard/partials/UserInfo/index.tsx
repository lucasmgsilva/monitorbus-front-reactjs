import { useState } from 'react';
import { Container } from '../../../../components/MainComponents';
import { InfoData, InfoLabel, StudentID, StudentIDBody, Title, UserData, UserImage, UserImageContainer, UserSection } from './styles';

const UserInfo = () => {
    const [image, setImage] = useState('https://www.lucasmgsilva.com/imagens/bitmoji.png');
    const [name, setName] = useState('Lucas Matheus Gomes da Silva');
    const [course, setCourse] = useState('Tecnologia em Análise e Desenvolvimento de Sistemas');
    const [educationalInstitution, setEducationalInstitution] = useState('Instituto Federal de Educação, Ciência e Tecnologia de São Paulo');
    const [telephone, setTelephone] = useState('(16) 99735-4480');

    return (
        <UserSection>
            <Container>
                <StudentID>
                    <Title>Identidade de Passageiro</Title>
                    <StudentIDBody>
                        <UserImageContainer>
                            <UserImage src={image}/>
                        </UserImageContainer>
                        <UserData>
                            <InfoLabel>Nome:</InfoLabel>
                            <InfoData>{name}</InfoData>

                            <InfoLabel>Curso:</InfoLabel>
                            <InfoData>{course}</InfoData>

                            <InfoLabel>Instituição de Ensino:</InfoLabel>
                            <InfoData>{educationalInstitution}</InfoData>
                        <InfoLabel>Telefone:</InfoLabel>
                            <InfoData>{telephone}</InfoData>
                        </UserData>
                    </StudentIDBody>
                </StudentID>
            </Container>
        </UserSection>
    );
}

export default UserInfo;