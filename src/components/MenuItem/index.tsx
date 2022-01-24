import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Image, Item, Text } from "./styled";
import './styles.css'

type PropsType = {
    image: string,
    text: string,
    to: string
}

const MenuItem = (props: PropsType) => {
    return (
        <Link to={props.to} className="link">
            <Item>
                <Image src={props.image}/>
                <Text>{props.text}</Text>
            </Item>
        </Link>
    )
}

export default MenuItem;