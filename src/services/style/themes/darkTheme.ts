import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { typography, zIndex } from './common';

const darkMuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    ...typography,
  },
  zIndex: {
    ...zIndex,
  },
});

export const darkTheme = responsiveFontSizes(darkMuiTheme);
