// A custom theme for this app
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { typography, zIndex } from './common';

const lightMuiTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    ...typography,
  },
  zIndex: {
    ...zIndex,
  },
});

export const lightTheme = responsiveFontSizes(lightMuiTheme);
