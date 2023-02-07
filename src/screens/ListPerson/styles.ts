import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`