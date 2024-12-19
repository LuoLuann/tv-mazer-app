import { ThemeProps } from "styled-components/native";
import styled from "styled-components/native";

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
`;