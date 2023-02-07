import { TouchableOpacityProps  } from 'react-native';
import { Container, Title, ButtonTypeStyleProps } from './styles';


type Props = TouchableOpacityProps  & {
    tittle: String;
    type?: ButtonTypeStyleProps;
}
export function Button({ tittle, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest} >
            <Title>
                {tittle}
            </Title>
        </Container>
    )
}