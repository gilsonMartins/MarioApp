import { Container, Title, Icon } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";



type Props = & {
    name: String;
    onRemove: () => void;
}
export function PersonCard({ name, onRemove }: Props) {
    return (
        <Container>
            <Icon
            
            />

            <Title>
                {name}
            </Title>
        
            <ButtonIcon
                icon="remove"
                onPress={onRemove}
                type="SECUNDARY"
            />
                 </Container>
    )
}