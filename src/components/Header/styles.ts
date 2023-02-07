import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled.Image`
    margin-top: 20px;
    width: 46px;
    height: 46px;
    border-radius: 55px;

`;

export const BackButton = styled.TouchableOpacity`
    flex : 1 ;
    margin-top: 20px;
`;
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 28,
    color: theme.COLORS.WHITE
}))``;