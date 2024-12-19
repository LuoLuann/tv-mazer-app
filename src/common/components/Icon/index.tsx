import { View } from 'react-native'
import { IconProps } from './types'
import { Container } from './styles'
import icons from '../../constants/icons';

// serve para esconder uma propriedade de um determinado tipo
// ou seja, estou omitindo source
const Icon = ({ icon, size=20, color, style, ...rest}: Omit<IconProps, 'Source'>) => {
    return (
        <Container
          size={size}
          source={icons[icon]}
          style={[{ tintColor: color }, style]}
          resizeMode="contain"
          {...rest}
        />
    );
}

export default Icon