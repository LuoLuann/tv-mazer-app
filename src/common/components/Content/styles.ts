import { ThemeProps } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: ${({ theme }: ThemeProps) => theme.spacing.md}px;
  margin-right: ${({ theme }: ThemeProps) => theme.spacing.md}px;
`;