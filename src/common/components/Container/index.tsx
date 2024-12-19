import { useTheme } from 'styled-components/native'

import { ContainerProps } from './types'
import { Content } from './styles';
import { StatusBar } from 'react-native';

const Container = ({ children }: ContainerProps) => {
    const { colors } = useTheme();
  return (
    <Content>
        <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
        {children}
    </Content>
  )
}

export default Container;