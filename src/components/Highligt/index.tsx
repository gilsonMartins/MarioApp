import { Container, Title, SubTitle } from "./styles";


type Props = {
    tittle: String;
    subtitle: String;
}
export function Highlight({ tittle, subtitle }: Props) {
    return (
        <Container>
            <Title>
                {tittle}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}