import { Container } from "../../../../components/MainComponents";
import MenuItem from "../../../../components/MenuItem";
import { MenuList, MenuSection } from "./styles";

const UserMenu = () => {
    return (
        <MenuSection>
            <Container>
                <MenuList>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </MenuList>
            </Container>
        </MenuSection>
    )
}

export default UserMenu;