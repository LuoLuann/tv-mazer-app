import { Platform } from "react-native";
import { ThemeProps } from "styled-components/native";
import styled from "styled-components/native";

export const Content = styled.TextInput`
    font-size: 14px;
    padding: ${({ theme }: ThemeProps) => 
        Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
    border-radius: ${({ theme }: ThemeProps) => theme.borders.radius.small}px;
    background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
    color: ${({ theme }: ThemeProps) => theme.colors.caption};
    padding-left: ${ Platform.OS === 'ios' ? '30px' : '50px' };
    padding-right: ${ Platform.OS === 'ios' ? '30px' : '50px' };
`;

export const Container = styled.View`
    justify-content: center;
`;

export const AbsoluteIcon = styled.View`
    position: absolute;
    left: ${({ theme }: ThemeProps) => Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;

export const AbsoluteLoading = styled.View`
    position: absolute;
    right: ${({ theme }: ThemeProps) => Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;
