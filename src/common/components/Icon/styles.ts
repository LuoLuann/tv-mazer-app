import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.Image<Partial<IconProps>>`
  min-height: ${({ size }: IconProps) => size}px;
  min-width: ${({ size }: IconProps) => size}px;
  max-height: ${({ size }: IconProps) => size}px;
  max-width: ${({ size }: IconProps) => size}px;
`;