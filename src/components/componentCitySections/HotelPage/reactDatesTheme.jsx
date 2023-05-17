import { ThemedStyleSheet } from 'react-with-styles/lib/ThemedStyleSheet';
import { aphroditeInterface } from 'react-with-styles-interface-aphrodite';
import { DefaultTheme } from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    color: {
      ...DefaultTheme.reactDates.color,
      highlighted: {
        backgroundColor: '#025ABB',
        backgroundColor_active: '#FCD800',
        backgroundColor_hover: '#FCD800',
        color: '#7C7C80',
        color_active: '#7C7C80',
        color_hover: '#7C7C80',
      },
    },
  },
});
