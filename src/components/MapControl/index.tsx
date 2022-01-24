import { Control, Text, Image } from "./styled";

type PropsType = {
    text: string,
    image: string,
    clickFunction: () => void
}

const MapControl = (props: PropsType) => {
    return (
        <Control onClick={props.clickFunction}>
            <Image src={props.image}/>
            <Text>
                {props.text}
            </Text>
        </Control>
    )
}

export default MapControl;