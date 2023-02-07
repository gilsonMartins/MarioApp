import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export type ButtonIconStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonIconStyleProps;
}
export const Container = styled(TouchableOpacity) <Props>`
    flex:  1;
    width: 56px;
    height: 56px;

    margin-left:12px;
    justify-content: center;
    align-items: center;
`;
export const Icon = styled(MaterialIcons).attrs<Props>(({theme,type}) =>({
    size:24,
    color : type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``