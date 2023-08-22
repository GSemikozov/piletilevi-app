import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';

import { theme } from '@shared/ui-kit';

import type { AppProps } from '@app';
import type { WrapedComponent } from './types';

const styles = {
  body: {
    backgroundColor: '#f4f4f6',
  },
  h1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
};

export const withMaterialUi = (component: WrapedComponent<AppProps>) => (props: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={styles} />
      {component(props)}
    </ThemeProvider>
  );
};
