import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { ButtonIcon } from '@components/ButtonIcon';

type Propos = TouchableOpacityProps & {
    title: String;
    onAction: () => void;
}

export function GroupCard({ title, onAction }: Propos) {
    return (
        <Container >
            <Icon />

            <Title>
                {title}
            </Title>
            <ButtonIcon
                icon="add"
                onPress={onAction}
            />
        </Container>
    )
}