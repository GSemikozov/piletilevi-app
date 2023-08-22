import { Provider } from 'react-redux';

import { setupStore } from '@app/store';

import type { AppProps } from '@app';
import type { WrapedComponent } from './types';

const store = setupStore();

export const withRedux = (component: WrapedComponent<AppProps>) => (props: AppProps) => {
  return <Provider store={store}>{component(props)}</Provider>;
};
