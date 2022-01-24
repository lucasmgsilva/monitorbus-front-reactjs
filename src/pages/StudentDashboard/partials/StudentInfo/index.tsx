import { useState } from 'react';
import { Container } from '../../../../components/MainComponents';
import { InfoData, InfoLabel, StudentID, StudentIDBody, Title, StudentData, StudentImage, StudentImageContainer, StudentSection } from './styled';

const StudentInfo = () => {
    const [image, setImage] = useState('https://www.lucasmgsilva.com/imagens/bitmoji.png');
    const [name, setName] = useState('Lucas Matheus Gomes da Silva');
    const [course, setCourse] = useState('Tecnologia em Análise e Desenvolvimento de Sistemas');
    const [educationalInstitution, setEducationalInstitution] = useState('Instituto Federal de Educação, Ciência e Tecnologia de São Paulo');
    const [telephone, setTelephone] = useState('(16) 99735-4480');

    return (
        <StudentSection>
            <Container>
                <StudentID>
                    <Title>Identidade de Passageiro</Title>
                    <StudentIDBody>
                        <StudentImageContainer>
                            <StudentImage src={image}/>
                        </StudentImageContainer>
                        <StudentData>
                            <InfoLabel>Nome:</InfoLabel>
                            <InfoData>{name}</InfoData>

                            <InfoLabel>Curso:</InfoLabel>
                            <InfoData>{course}</InfoData>

                            <InfoLabel>Instituição de Ensino:</InfoLabel>
                            <InfoData>{educationalInstitution}</InfoData>
                        <InfoLabel>Telefone:</InfoLabel>
                            <InfoData>{telephone}</InfoData>
                        </StudentData>
                    </StudentIDBody>
                </StudentID>
            </Container>
        </StudentSection>
    );
}

export default StudentInfo;