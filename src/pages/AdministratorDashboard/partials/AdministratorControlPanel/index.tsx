import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../../components/MainComponents';
import MenuItem from '../../../../components/MenuItem';
import { AdministratorPanel, AdministratorPanelBody, Title, AdministratorSection } from './styled';

const AdministratorControlPanel = () => {
    return (
        <AdministratorSection>
            <Container>
                <AdministratorPanel>
                    <Title>Painel de Controle</Title>
                    <AdministratorPanelBody>
                        
                        <MenuItem
                            image={process.env.PUBLIC_URL + '/assets/images/travel.png'}
                            text="Viagens"
                            to="/admin/travels"
                        />
                        <MenuItem
                            image={process.env.PUBLIC_URL + '/assets/images/user.png'}
                            text="Usuários"
                            to="/admin/users"
                        />
                        <MenuItem
                            image={process.env.PUBLIC_URL + '/assets/images/bus.png'}
                            text="Ônibus"
                            to="/admin/buses"
                        />
                        <MenuItem
                            image={process.env.PUBLIC_URL + '/assets/images/route.png'}
                            text="Rotas"
                            to="/admin/routes"
                        />
                    </AdministratorPanelBody>
                </AdministratorPanel>
            </Container>
        </AdministratorSection>
    );
}

export default AdministratorControlPanel;