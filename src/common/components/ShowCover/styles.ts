import { Platform } from 'react-native';
import { ThemeProps } from 'styled-components/native';
import styled from 'styled-components/native';

export const Container = styled.View<{ width: number }>`
    width: ${(props: { width: number }) => props.width}px;
`;

export const ShowCoverImage = styled.Image<{ hasBackground: boolean }>`
  background-color: ${(props: { hasBackground: boolean, theme: ThemeProps }) => 
    props.hasBackground ? props.theme.colors.surface : 'transparent'};
  border-radius: ${({ theme }: ThemeProps) => 
    Platform.OS === 'ios' ? theme.borders.radius.small : 0}px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
`;

export const CenterIconAndImage = styled.View`
  justify-content: center;
  align-items: center;
`;