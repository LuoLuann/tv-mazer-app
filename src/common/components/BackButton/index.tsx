import React from 'react'
import { BackButtonProps } from './types'
import { useTheme } from 'styled-components/native'
import { Container } from './styles';
import Icon from '../Icon';

const BackButton = ({ onPress }: BackButtonProps) => {
    const { colors } = useTheme();
  return (
    <Container onPress={onPress} hitSlop={40}>
        <Icon icon="arrowLeft" color={colors.onSecondary} />
    </Container>
  )
}

export default BackButton;