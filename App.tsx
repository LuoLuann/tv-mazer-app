import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/common/constants/styles/themes/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation';
import SeasonsModal from './src/screens/Details/localComponents/SeasonsModal';
import { seasonMocked } from './src/common/constants/mocks/season.mock';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>  
    </ThemeProvider>
  );
}
