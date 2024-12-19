import { Platform } from "react-native";
import styled from "styled-components/native";
import { EpisodeCoverProps } from "./types";
import { ThemeProps } from "styled-components/native";

export const Container = styled.Image<Partial<EpisodeCoverProps>>`
  width: ${({ size }: EpisodeCoverProps) =>
    size === "small" ? 100 : size === "medium" ? 200 : 300}px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  border-radius: ${({ theme }: ThemeProps) =>
    Platform.OS === "ios" ? theme.borders.radius.small : 0}px;
`;

export const AbsoluteIconEpisodeCover = styled.View`
  position: absolute;
  left: 40%;
  top: 40%;
`;