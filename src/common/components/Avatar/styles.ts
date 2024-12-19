import styled from "styled-components/native";
import { AvatarProps } from "./types";
import { ThemeProps } from "styled-components/native";
import Icon from "../Icon";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Content = styled.Image<Partial<AvatarProps>>`
    width: ${({ size }: AvatarProps) => (size === 'large' ? 150 : 60)}px;
    height: ${({ size }: AvatarProps) => (size === 'large' ? 150 : 60)}px;
    border-radius: ${({ size }: AvatarProps) => (size === 'large' ? 75 : 30)}px;
    background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
`;


export const AbsoluteIcon = styled(Icon)`
    position: absolute;
`;