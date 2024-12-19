import { useTheme } from 'styled-components/native';
import { Container } from './styles'
import { NotFoundProps } from './types';
import Spacer from '../Spacer';
import Text from '../Text';
import Icon from '../Icon';

const NotFound = ({ title, icon = 'noResults', color}: NotFoundProps) => {
  const { colors, spacing } = useTheme() 
  return (
      <Container>
        <Icon icon={icon} size={100} color={color || colors.caption} />
        <Spacer height={spacing.md} />
        {!!title &&(
          <Text color='caption' size={20}>
            {title}
          </Text>
        )}
      </Container>
    );
}

export default NotFound