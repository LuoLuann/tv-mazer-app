import styled from "styled-components/native";
import { Props } from "./types";

// o <> signifca que voce ta usando um type generico
export const Container = styled.Text<Partial<Props>>`
  color: ${(props: any) => props.theme.colors[props.color || "onSecondary"]};
  font-size: ${(props: any) => props.size || 14}px;
`;