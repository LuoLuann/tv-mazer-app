import { Platform } from "react-native";
import { ThemeProps } from "styled-components/native";
import styled from "styled-components/native";

const isIos = Platform.OS === 'ios'

export const RowCover = styled.View`
    flex-direction: row;
`;

export const RowFavorite = styled.Pressable`
    flex-direction: row;
    align-items: center;
`;

export const RowButtonSeason = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-radius: ${(props: ThemeProps) => isIos ? props.theme.borders.radius.small : 0}px;
`;

export const ContentButtonSeason = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${(props: ThemeProps) => !isIos ? props.theme.spacing.sm : 0}px;
    background-color: ${(props: ThemeProps) => !isIos ? props.theme.colors.surface : 'transparent'};
`;