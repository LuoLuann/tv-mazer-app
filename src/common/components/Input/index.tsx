import React from 'react'
import {Container, Content, AbsoluteIcon, AbsoluteLoading} from './styles';
import { InputProps } from './types';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator, Platform } from 'react-native';
import Icon from '../Icon';

const Input = ({loading, ... props}: InputProps) => {
    const {colors} = useTheme()
  return (
    <Container>
        <Content 
            placeholder="Search" 
            placeholderTextColor={colors.caption}
            {...props} 
            />
        {loading && <AbsoluteLoading>
                <ActivityIndicator 
                    color={colors.onSecondary}
                    size={Platform.OS === 'ios' ? 'small' : 'large' }
                />
            </AbsoluteLoading>} 
        <AbsoluteIcon>
            <Icon icon='magnify' color={colors.caption} />
        </AbsoluteIcon>
    </Container>
  )
}

export default Input