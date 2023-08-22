import type { PreloadedState } from '@reduxjs/toolkit';

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupStore } from '@app/store';

import type { RenderOptions } from '@testing-library/react';
import type { AppStore, RootState } from '@app/store';

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
};

export const renderWithProvider = (ui: React.ReactElement, options: ExtendedRenderOptions = {}) => {
  const { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = options;

  const Wrapper = (props: React.PropsWithChildren<any>): JSX.Element => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
  };

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
