import { BackIcon, Container, BackButton, Logo } from "./styles";

import logoImag from '@assets/mario.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
    ShowBackButton?: boolean;
}
export function Header({ ShowBackButton = false }: Props) {
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <Container>
            {
                ShowBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={logoImag} />
        </Container>
    )
}