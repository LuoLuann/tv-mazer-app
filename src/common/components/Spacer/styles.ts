import styled from "styled-components/native";
import { SpacerProps } from "./types";

export const Container = styled.View<SpacerProps>`
    height: ${({ height }: SpacerProps) => height || 0}px;
    width: ${({ width }: SpacerProps) => width || 0}px;
`;
