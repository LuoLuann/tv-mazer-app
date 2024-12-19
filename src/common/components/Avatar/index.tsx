import React from 'react'
import { Container, Content, AbsoluteIcon } from './styles'
import { AvatarProps } from './types'
import { useTheme } from 'styled-components'

const Avatar = ({ name, size, url}: AvatarProps) => {
    const { colors } = useTheme()
  return (
    <Container>
        <Content
            source={{uri: url}}
            size={size}
            resizeMode="cover"
            accessibilyRole="image"
            accessibilyLabel={name}
        >

        </Content>
        {!url && <AbsoluteIcon icon="person" size={20} color={colors.caption} />}
    </Container>
  )
}

export default Avatar