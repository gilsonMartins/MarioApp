import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export const Container = styled(TouchableOpacity)`
    flex-direction:  row;
    margin: 10px;
    height: 56px;
    width: 100%;

    background-color: ${({ theme }) =>theme.COLORS.GRAY_500 };

   margin-bottom: 20px;
   align-self: center;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.Text`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) =>({
    size:24,
    color : theme.COLORS.RED
}))`
    margin-left: 20px;
    margin-right: 20px;
`
